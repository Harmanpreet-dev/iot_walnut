import React, { useState } from "react";
import { Button, Spin, notification } from "antd";
import OtpInput from "react18-input-otp";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function TwoFactEmailAuth({ next }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const { email } = useSelector((state) => state.auth);
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    axiosInstance
      .post(`/email/verify-otp`, {
        email: email,
        otp: code,
      })
      .then((res) => {
        setError(null);
        setCode("");
        next();
      })
      .catch((err) => {
        setError("Invalid OTP Code");
      });
  };

  const handleChange = (code) => setCode(code);

  const resendEmailOTP = () => {
    setLoading(true);
    axiosInstance
      .post(`/email/otp`, {
        email: email,
      })
      .then((res) => {
        setLoading(false);

        openNotification("success", res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openNotification = (type, message) => {
    api[type]({
      message,
    });
  };

  return (
    <>
      {contextHolder}

      <form method="dialog">
        <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="text-center text-[29px] font-[500] text-[#1E2328] landing-[19px] mb-3">
        Email Verification
      </h3>
      <p className="py-1 text-center text-[14px] font-[500] text-[#898B8F] landing-[19px] w-80 m-auto">
        Enter verification code sent to {email}
      </p>
      <div className="modal-action flex items-center justify-center max-h-96">
        <form
          method="dialog"
          className="flex items-center justify-center flex-col"
        >
          <Spin spinning={loading}>
            <div className="sets mb-5">
              <OtpInput
                className="border p-1 m-1"
                value={code}
                onChange={handleChange}
                numInputs={6}
                placeholder=""
                isSuccessed={false}
                errorStyle="error"
                successStyle="success"
                separateAfter={1}
                shouldAutoFocus
              />
            </div>
          </Spin>
          <div>
            <p className="h-[2px] text-rose-600 text-[12px]">{error}</p>
          </div>
        </form>
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        <div className="flex items-center justify-center flex-col max-w-[26.5rem] m-auto">
          <Button
            className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
          <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
            {/* <span style={{ "--value": 0 }}></span>:
            <span style={{ "--value": 0 }}></span> */}
          </span>

          <div className="mt-3">
            <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">
              Didn’t Received OTP?{" "}
              <span
                className="text-base-content ml-2 font-[500] text-[16px] landing-[19px] cursor-pointer"
                onClick={() => resendEmailOTP()}
              >
                Resend
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
