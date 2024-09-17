import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Empty, message } from "antd";
import { MdOutlineContentCopy } from "react-icons/md";
import { SELECT_DEVICE } from "../../redux/actions/schduleAction";
import copy from "copy-to-clipboard";
import axiosInstance from "../../utils/axiosInstance";

export default function SchduleSelectDevice() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [fleet, setFleets] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [Continue, setContinue] = useState(true);
  const { schdule } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getDevices();
    getFleets();
  }, []);

  const handleCopy = (imei) => {
    copy(imei);
    messageApi.open({
      type: "success",
      content: "Text copied to clipboard!",
    });
  };

  const getDevices = () => {
    axiosInstance
      .get(`/devices/fleet/${schdule.fleet.name}`)
      .then((res) => {
        let data = res.data;
        data.map((x) => {
          x.checked = false;
        });
        setDevices(data);
        setFilteredDevices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFleets = () => {
    axiosInstance
      .get(`/fleets`)
      .then((res) => {
        setFleets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAllSelect = (checked) => {
    const selectedDevices = devices.map((device) => {
      device.checked = checked;
      return device;
    });
    setDevices(selectedDevices);
    setFilteredDevices(selectedDevices);
    setContinue(!checked);
  };

  const handleSingleSelect = (id) => {
    const selectedDevices = [];
    const updatedDevices = devices.map((device) => {
      if (device.id === id) {
        device.checked = !device.checked;
      }
      if (device.checked) selectedDevices.push(device);
      return device;
    });
    setDevices(updatedDevices);
    setContinue(selectedDevices.length === 0);
  };
  const handleSubmit = () => {
    let deviceArr = [];

    devices.map((device) => {
      if (device.checked) {
        deviceArr.push(device);
      }
    });
    dispatch(SELECT_DEVICE({ devices: deviceArr }));
    navigate("/schdule-task");
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (!value?.trim()) {
      setFilteredDevices(devices);
    } else {
      const results = devices.filter(
        (device) =>
          device.name.toLowerCase().includes(value.toLowerCase()) ||
          device.imei.includes(value)
      );
      setFilteredDevices(results);
    }
  };

  return (
    <>
      {contextHolder}

      <div className="content-wrapper bg-base-200">
        <div className="flex items-center justify-between">
          <div aria-label="Breadcrumbs" className="breadcrumbs p-0">
            <ul>
              <li className="text-base-content text-[18px]">
                <Link to="/schdule-select-fleet">
                  <IoIosArrowBack className="mr-3" />
                  Go Back{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between flex-col my-10">
          <div className="text-[29px] font-[500] landing-[29px] text-center">
            Select Device for Schedule a Task
          </div>
          <div className="flex items-center">
            <div className="form-control flex flex-row items-center rounded-[10px] border border-base-content/20 px-2 mx-4  my-10 bg-base-100">
              <CiSearch className="text-[25px]" />
              <input
                className="input rounded w-[23rem] text-[16px] focus:outline-none focus:border-none focus:outline-offset-none"
                placeholder="Search Device.."
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="flex items-center justify-end w-full flex-wrap ">
            <button
              className="btn bg-slate-950 text-slate-50 text-[16px] font-[500] landing-[19px] border rounded-xl w-40 hover:bg-slate-950"
              onClick={() => handleSubmit()}
              disabled={Continue}
            >
              Continue
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="col-12">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="border-b-2 border-base-300">
                  <tr className="text-[#B1B1B1] text-[15px] font-[700] landing-[35px] ">
                    <th className="w-2">
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          onClick={(e) => handleAllSelect(e.target.checked)}
                        />
                      </label>
                    </th>
                    <th>Device Name</th>
                    <th>IMEI Number</th>
                    <th>Status</th>
                    <th>Fleet</th>
                  </tr>
                </thead>
                <br />
                <tbody className="mt-3">
                  {filteredDevices.length ? (
                    filteredDevices.map((x) => (
                      <>
                        <tr className="shadow-[0_3.5px_5.5px_0_#00000005] h-20 mb-3">
                          <th className="shadow-none">
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox"
                                checked={x.checked}
                                onClick={() => handleSingleSelect(x.id)}
                              />
                            </label>
                          </th>
                          <td className="bg-base-100 rounded-l-[15px]">
                            <div className="flex items-center gap-3">
                              <div className="text-base-500 font-[700] text-[19px] landing-[35px]">
                                {x.name}
                              </div>
                            </div>
                          </td>
                          <td className="text-[16px] font-[500] landing-[35px] bg-base-100">
                            <div
                              className="flex items-center justify-start cursor-pointer"
                              onClick={() => handleCopy(x.imei)}
                            >
                              {x.imei}{" "}
                              <span className="ml-2 text-slate-400">
                                <MdOutlineContentCopy />
                              </span>
                            </div>
                          </td>
                          <td className="text-[16px] font-[500] landing-[35px] bg-base-100 ">
                            <span
                              className="flex"
                              style={{ alignItems: "center" }}
                            >
                              <GoDotFill className="text-[#51DCA8] mr-1" />
                              Active
                            </span>
                          </td>
                          <td className="text-[16px] font-[500] landing-[35px] bg-base-100 ">
                            {fleet.map((y) => {
                              if (y.name === x.fleet) {
                                return y.name;
                              }
                            })}
                          </td>
                        </tr>
                        <br />
                      </>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-[20px] text-center">
                        <Empty />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
