import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TfiExport } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { Tabs, message } from "antd";
import axiosInstance from "../../utils/axiosInstance";
import DevicesTable from "../common/DevicesTable";
import TwoFactAuth from "../../components/TwoFactAuth/TwoFactAuth";
import { useSelector } from "react-redux";
import exportToExcel from "../../utils/exportToExcel";

const tabBackgroundColors = {
  1: "rgb(34 197 94)",
  2: "rgb(249 115 22)",
  3: "rgb(220 38 38)",
};

const tabTextColors = {
  1: "rgb(220 252 231)",
  2: "rgb(253 230 138)",
  3: "rgb(254 202 202)",
};

const onChange = (key, setActiveTab) => {
  setActiveTab(key);
};

export default function OTADetails() {
  const [activeTab, setActiveTab] = useState("1");
  const [job, setJob] = useState();
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [jobStatus, setJobStatus] = useState("true");
  const { email } = useSelector((state) => state.auth);
  const parms = useParams();

  useEffect(() => {
    getOTAUpdateDetails();
  }, []);

  const items = [
    {
      key: "1",
      label: "Success",
      children: <DevicesTable devices={[]} />,
    },
    {
      key: "2",
      label: "In Progress",
      children: <DevicesTable devices={filteredDevices} />,
    },
    {
      key: "3",
      label: "Failed",
      children: <DevicesTable devices={[]} />,
    },
  ];

  const getOTAUpdateDetails = () => {
    axiosInstance
      .get(`/ota-updates/${parms.id}`)
      .then(({ data }) => {
        if (data.id) {
          const { name, description, fleet, devices, arn, status } = data;
          setJob({
            name,
            description,
            fleetName: JSON.parse(fleet).name,
            arn,
          });
          const devicesList = JSON.parse(devices);
          setDevices(devicesList);
          setFilteredDevices(devicesList);
          setJobStatus(status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (!value?.trim()) {
      setFilteredDevices(devices);
    } else {
      const results = devices.filter((device) =>
        device.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDevices(results);
    }
  };
  const handleStopJob = () => {
    console.log(job);
    axiosInstance
      .post(`/schedulers/stop-job`, {
        id: parms.id,
        arn: job.arn,
        type: "OTA",
      })
      .then((res) => {
        setJobStatus("false");
        messageApi.success("Job Stoped Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyUser = (value) => {
    axiosInstance
      .post(`/email/otp`, {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        document.getElementById("my_modal_2").showModal();
      })
      .catch((err) => {
        if (err.response.data.error === "Email already exists") {
        }
      });
  };

  const handle2FA = (response) => {
    console.log(response);
    if (response === true) {
      handleStopJob();
    }
  };

  const ExportData = () => {
    const jobs = devices?.map(({ name, fleet, imei, status }) => {
      return {
        name,
        fleet,
        imei,
        status,
      };
    });
    exportToExcel({
      data: jobs,
      filename: "ota_devices.xlsx",
    });
  };

  return (
    <>
      {contextHolder}
      <TwoFactAuth handle2FA={handle2FA} />
      <div className="content-wrapper bg-base-200">
        <div className="flex items-center justify-between">
          <div aria-label="Breadcrumbs" className="breadcrumbs p-0">
            <ul>
              <li className="text-base-content/70 text-[18px]">
                <Link to="/manage-ota-update"> OTA Update </Link>
              </li>
              <li className="text-[18px]">{job?.name}</li>
            </ul>
          </div>
          <div className="search-adminBox flex items-center justify-between w-[28rem]">
            <div className="form-control flex flex-row items-center rounded-box border border-base-content/20 px-2 mx-4 bg-base-100">
              <CiSearch className="text-[25px]" />
              <input
                className="input w-full w-40 rounded focus:outline-none focus:border-none focus:outline-offset-none"
                placeholder="Search Devices..."
                onChange={handleSearch}
              />
            </div>
            <div className="adminBtn flex">
              {/* First Button */}
              <div>
                <button
                  className="btn bg-slate-950 text-slate-50 font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[17px] mr-4 hover:bg-slate-950 min-w-40"
                  onClick={ExportData}
                >
                  Export Job <TfiExport className="pl-2 text-[24px] stroke-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start flex-col my-6 border-b-2 pb-4">
          <div className="text-[22px] font-[700] landing-[35px]">
            {job?.name}
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start mt-3">
              <div className="mr-2 text-[14px] font-[500] landing-[35px] text-base-content/70">
                Descripiton :
              </div>
              <div className="flex items-center justify-center text-[15px] font-500 landing-[35px] text-base-content/80">
                <span className="mr-2">{job?.description}</span>{" "}
              </div>
            </div>

            <div className="flex items-center">
              <span className="flex items-center text-base-content/70 font-[500]">
                Fleet :
                <span className="ml-2 text-base-content font-[500]">
                  {job?.fleetName}
                </span>
              </span>
              <div className="ml-5">
                <button
                  className="btn bg-gray-200 text-gray-900 border rounded-[18px] border-gray-300 mr-3 mb-3 text-zinc-800 min-h-[36px] h-[40px] text-[16px] font-[500] landing-[35px] px-2 hover:bg-gray-300"
                  onClick={() => verifyUser()}
                >
                  Stop
                  <GoDotFill className="ml-2 text-[32px] text-[#FF2002] stroke-[5px] stroke-[#FF20024D]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table Start */}

        <div className="mt-6">
          <div style={{ width: "100%" }}>
            <Tabs
              defaultActiveKey="1"
              items={items?.map((item, index) => ({
                ...item,
                label: (
                  <div
                    style={{
                      backgroundColor:
                        activeTab === item.key
                          ? tabBackgroundColors[item.key]
                          : "inherit",
                      color:
                        activeTab === item.key
                          ? tabTextColors[item.key]
                          : "inherit",
                      padding: activeTab === item.key ? "16px 0" : "0",
                      borderTopLeftRadius: index === 0 ? "20px" : "0",
                      borderRadius:
                        item.key === "1"
                          ? "20px 0 0 20px"
                          : item.key === items[items.length - 1].key
                          ? "0 20px 20px 0"
                          : "0",
                    }}
                  >
                    {item.label}
                  </div>
                ),
              }))}
              onChange={(key) => onChange(key, setActiveTab)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
