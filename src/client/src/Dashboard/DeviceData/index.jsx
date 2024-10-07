import React, { useState } from "react";
import DeviceDetails from "./DeviceDetails";
import { Breadcrumb } from "antd";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import DeviceDetailstwo from "./DeviceDetailstwo";

export default function DashboardDevice() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div>
        <div className="content-wrapper bg-base-200">
          <div className="flex items-center justify-between">
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "Dashboard",
                },
                {
                  title: "Device Name 4",
                },
              ]}
            />

            <div className="search-adminBox flex items-center justify-between">
              <div className="form-control flex flex-row items-center rounded-box border border-base-content/20 px-2 mx-2 bg-base-100 border border-[#8F8F8F] ">
                <CiSearch className="text-[25px] cursor-pointer" />
                <input
                  className="input w-full w-40 rounded focus:outline-none focus:border-none focus:outline-offset-none"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn bg-white text-black font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px]  mr-2 border border-[#8F8F8F]">
                Revoke{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
              <div className="adminBtn">
                <button className="btn bg-slate-950 text-slate-50 font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px] hover:bg-slate-950 hover:bg-slate-950">
                  Export{" "}
                  <HiOutlineArrowUpTray className="pl-1 ml-5 text-[25px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="font-dm-sans text-[22px] leading-[35.5px]  font-[700] text -[#2D3748]    cursor-pointer">
            Device Name 4
          </div>
          <div className="mt-2 flex items-center justify-between ">
            <div className="text-[14px] font-[500] leading-[35.5px] font-dm-sans flex text-[#00000073]">
              IMEI Number :{" "}
              <span className=" ml-1 text-[17px] font-[500] leading-[35.5px] font-dm-sans text-[#2E2828]">
                {" "}
                82658 37748 27749
              </span>
              <span className="ml-3 mt-2 text-[#2E2828] text-xl">
                <IoCopyOutline></IoCopyOutline>
              </span>
            </div>

            <span className="flex mr-1">
              <GoDotFill className="text-[#51DCA8] mr-1 text-2xl" />

              <span className="mb-0 text-[16px] font-[500] ">Active</span>
            </span>
          </div>

          <div style={{ marginTop: "0px", paddingTop: "0px" }}>
            <DeviceDetails />
          </div>
          <DeviceDetailstwo />
        </div>
      </div>
    </>
  );
}
