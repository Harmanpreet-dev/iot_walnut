import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import TwoFactAuth3 from "../../components/TwoFactAuth3/TwoFactAuth3";
import { message } from "antd";
import axiosInstance from "../../utils/axiosInstance";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[0-9a-zA-Z].*/.test(values.name)) {
    errors.name = "Invalid username";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^\d{8,11}$/.test(values.phone)) {
    errors.phone = "Enter valid Phone Number";
  }
  return errors;
};

export default function AdminEditModal({ getUsers, state, activeUser = null }) {
  const uploadRef = useRef();
  const [imageSrc, setImageSrc] = useState("./images/default.jpeg");
  const [emailError, setEmailError] = useState("");
  const [formValues, setFormValues] = useState();
  const [passwordModal, setPasswordModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (activeUser !== null) {
      let { name, email, phone, photo } = activeUser;
      if (photo !== null) {
        setImageSrc(`${process.env.REACT_APP_PROFILE_URL}/profile/${photo}`);
      } else {
        setImageSrc("./images/default.jpeg");
      }
      formik.setValues({
        name,
        email,
        phone,
      });
    }
  }, [activeUser]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const formik2 = useFormik({
    initialValues: {
      Password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handle2FA3 = (response) => {
    console.log(response);
    if (response === true) {
      handleFormSubmit(formValues);
    }
  };

  const handleUploadPhoto = () => {
    uploadRef.current.click();
  };

  const handleFormSubmit = (values) => {
    setEmailError("");
    const formData = new FormData();
    formData.append("id", activeUser.id);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);

    if (values.image && values.image.length > 0) {
      formData.append("image", values.image[0]);
    }

    axiosInstance
      .put(`/admins/${activeUser.id}`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => {
        getUsers();
        document.getElementById("my_modal_edit").close();
        messageApi.success("Admin Updated Successfully");
      })
      .catch((err) => {
        if (err.response.data.error === "Email already exists") {
          setEmailError(err.response.data.error);
        }
      });
  };

  const handleFileSelect = (event) => {
    if (event.target.value !== "") {
      const files = event.target.files;
      let myFiles = Array.from(files);
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      myFiles = myFiles.filter((file) => {
        if (!validImageTypes.includes(file.type)) {
          alert("Invalid file type. Only JPG, PNG, and GIF are allowed.");
          return false;
        }
        if (file.size > maxSize) {
          alert("File size exceeds the 5MB limit.");
          return false;
        }
        return true;
      });

      if (myFiles.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageSrc(e.target.result);
        };
        reader.readAsDataURL(myFiles[0]);
        formik.setFieldValue("image", myFiles);
      }
    }
  };

  const ChangePassword = () => {
    return (
      <div className="mt-3 w-3/4">
        <form onSubmit={formik2.handleSubmit}>
          <div className="mt-6">
            <button
              type="submit"
              className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]"
            >
              Submit
            </button>
            <button
              type="button"
              style={{ color: "black" }}
              className="btn mt-4 text-white gap-2 btn btn-block rounded text-[17px] font-[500] landing-[19px]"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <dialog id="my_modal_edit" className="modal">
      {contextHolder}
      <TwoFactAuth3 handle2FA={handle2FA3} />
      <div className="modal-box bg-base-200 max-w-[50rem] ">
        <form method="dialog">
          <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div
          className="flex items-center justify-center flex-col"
          style={{
            margin: "2rem 0",
          }}
        >
          {passwordModal ? (
            <ChangePassword />
          ) : (
            <>
              <div
                className="profile-image cursor-pointer"
                onClick={() => handleUploadPhoto()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={imageSrc}
                  alt="profile-avtar"
                  className="w-24 h-24 border border-1 border-current rounded-full object-cover"
                />
                <div className="tex-[15px] font-[700] landing-[15px] text-center mt-2">
                  Upload New Picture
                </div>
              </div>

              <div className="mt-3 w-3/4">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name="image"
                    ref={uploadRef}
                    className="file-input w-full max-w-xs"
                    onChange={(event) => handleFileSelect(event)}
                  />
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                          Full Name
                        </span>
                      </label>
                      <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                        <input
                          type="text"
                          className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                      </div>
                      <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                        {formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : null}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="form-control mt-3 w-1/2 mr-4">
                        <label className="label">
                          <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                            Email
                          </span>
                        </label>
                        <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                          <input
                            className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>
                        <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                          {formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                          ) : null}
                          {emailError !== "" ? <div>{emailError}</div> : null}
                        </span>
                      </div>

                      <div className="form-control mt-3 w-1/2 ml-4">
                        <label className="label">
                          <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                            Phone
                          </span>
                        </label>
                        <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                          <input
                            className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                            name="phone"
                            type="tel"
                            size="20"
                            minLength="9"
                            maxLength="14"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                          />
                        </div>

                        <span className="h-[2px] mt-3 text-rose-600 text-[12px]">
                          {formik.errors.phone ? (
                            <div>{formik.errors.phone}</div>
                          ) : null}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
