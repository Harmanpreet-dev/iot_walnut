import { Empty } from "antd";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AdminTable({ users, handleDeleteAdmin, handleActive }) {
  const TableRow = ({ id, name, email, phone, photo }) => {
    return (
      <>
        <tr className="shadow-[0_3.5px_5.5px_0_#00000005]">
          <td className="bg-base-100 rounded-l-[15px]">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={
                      photo
                        ? `${process.env.REACT_APP_PROFILE_URL}/profile/${photo}`
                        : "./images/default.jpeg"
                    }
                    alt="Avatar Tailwind CSS Component"
                    className="border-2 border-[#CBCBCB] rounded-[18px]"
                  />
                </div>
              </div>
              <div>
                <div className="text-base-500 font-[500] text-[19px] landing-[35px]">
                  {name}
                </div>
              </div>
            </div>
          </td>
          <td className="text-[16px] font-[500] landing-[35px] bg-base-100">
            {email}
          </td>
          <td className="text-[16px] font-[500] landing-[35px] bg-base-100 ">
            {phone}
          </td>
          <td className="bg-base-100 rounded-r-[15px] w-16">
            <div className="flex">
              <div
                className="flex items-center justify-start text-[14px] font-[500] landing-[35px] text-neutral-500 mx-3 cursor-pointer"
                onClick={() => {
                  handleActive(id);
                  document.getElementById("my_modal_edit").showModal();
                }}
              >
                Edit
                <span className="pl-1">
                  <MdOutlineModeEdit />
                </span>
              </div>
              <div
                className="flex items-center justify-start text-[14px] font-[500] landing-[35px] text-neutral-500 cursor-pointer"
                onClick={() => handleDeleteAdmin(id)}
              >
                Remove
                <span className="pl-1">
                  <RiDeleteBin6Line />
                </span>
              </div>
            </div>
          </td>
        </tr>
        <br />
      </>
    );
  };

  return (
    <div className="mt-6">
      <div className="col-12">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="border-b-2 border-base-300">
              <tr className="text-[#B1B1B1] text-[15px] font-[700] landing-[35px] ">
                <th>Admin</th>
                <th>Email</th>
                <th>Admin Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <br />
            <tbody className="mt-3">
              {users?.length ? (
                <>
                  {users.map((x) => {
                    let { id, name, email, phone, photo } = x;
                    return (
                      <TableRow
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        phone={phone}
                        photo={photo}
                      />
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan="5" className="text-[20px] text-center">
                    <Empty />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
