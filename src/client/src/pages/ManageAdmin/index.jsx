import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Breadcrumb, message } from "antd";
import AdminTable from "./AdminTable";
import AdminAddModal from "./AdminAddModal";
import TwoFactAuth2 from "../../components/TwoFactAuth2/TwoFactAuth2";
import AdminEditModal from "./AdminEditModal";
import axiosInstance from "../../utils/axiosInstance";

export default function ManageAdmin() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const state = useSelector((state) => state.auth);
  const [formValues, setFormValues] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    filterItems();
  }, [searchQuery, users]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterItems = () => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
      setError("");
    } else {
      const results = users.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (results.length === 0) {
        setError("No matching data found.");
      } else {
        setError("");
      }
      setFilteredUsers(results);
    }
  };

  const getUsers = () => {
    axiosInstance
      .get(`/admins`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteAdmin = (id) => {
    axiosInstance
      .delete(`/admins/${id}`)
      .then((res) => {
        getUsers();
        messageApi.success("Admin Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyUser = (value) => {
    axiosInstance
      .post(`/email/otp`, {
        email: state.email,
      })
      .then((res) => {
        console.log(res.data);
        setFormValues(value);
        document.getElementById("my_modal_2_2").showModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handle2FA2 = (response) => {
    if (response === true) {
      handleDeleteAdmin(formValues);
    }
  };

  const handleActive = (id) => {
    users.map((x) => {
      if (x.id === id) {
        setActiveUser(x);
      }
    });
  };

  return (
    <>
      {contextHolder}
      <TwoFactAuth2 handle2FA={handle2FA2} />
      <div className="content-wrapper bg-base-200">
        <div className="flex items-center justify-between">
          <Breadcrumb
            items={[
              {
                title: "Manage Admin",
              },
            ]}
          />
          <div className="search-adminBox flex items-center justify-between">
            <div className="form-control flex flex-row items-center rounded-box border border-base-content/20 px-2 mx-4 bg-base-100">
              <CiSearch className="text-[25px] cursor-pointer" />
              <input
                className="input w-full w-40 rounded focus:outline-none focus:border-none focus:outline-offset-none"
                placeholder="Search Admin.."
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
            <div className="adminBtn">
              <button
                className="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Add Admin <FaPlus className="pl-1 text-[18px]" />
              </button>
            </div>
          </div>
        </div>
        <AdminAddModal getUsers={getUsers} state={state} />
        <AdminEditModal
          activeUser={activeUser}
          getUsers={getUsers}
          state={state}
        />
        <AdminTable
          handleActive={handleActive}
          users={filteredUsers}
          handleDeleteAdmin={verifyUser}
          error={error}
        />
      </div>
    </>
  );
}
