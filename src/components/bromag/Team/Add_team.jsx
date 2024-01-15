import axios from "axios";
import React, { useState } from "react";
import { ServerAPI } from "../../../config/backendApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import toast from "react-hot-toast";

const Add_team = () => {
  const [photo, setPhoto] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handlePhoto = (e) => {
    if (!e.target.files) {
      return;
    }
    const image = e.target.files[0];
    setPhoto(image);
    const imageUrl = URL.createObjectURL(image);
    setPreviewImage(imageUrl);
  };

  const { state, city } = useStateAndCity();

  const handleAddTeamMember = async (data) => {
    try {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("state", state);
      formData.append("city", city);
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await axios.post(`${ServerAPI}addTeamMember`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success(response.data.message, {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#B00043",
            color: "#fff",
          },
        });
        navigate("/team");
      } else {
        toast.error(response.data.message, {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#B00043",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="p-4 w-full xs:ml-80 ">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700  flex justify-center">
        <div class="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(handleAddTeamMember)}>
            <div className="mb-6">
              <h3 className="w-full text-center text-xl text-black my-5">
                Add Team Member
              </h3>
              <label
                htmlFor="employee"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employee Name
              </label>
              <input
                type="text"
                id="employee"
                {...register("employee", {
                  required: true,
                  pattern: /^[a-zA-Z0-9'-]+(?:\s[a-zA-Z0-9'-]+)*$/,
                  maxLength: 20,
                })}
                placeholder="Enter employee name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.employee && errors.employee.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter the employee name
                </label>
              )}
              {errors.employee && errors.employee.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid employee name
                </label>
              )}
              {errors.employee && errors.employee.type === "maxLength" && (
                <label className="error-msg text-sm text-red-600">
                  Employee name must not exceed 20 characters
                </label>
              )}
            </div>

            <div className="mb-6">
              <label
                for="designation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                {...register("designation", {
                  required: true,
                  pattern: /^[a-zA-Z0-9'-]+(?:\s[a-zA-Z0-9'-]+)*$/,
                })}
                placeholder="Enter designation"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.designation && errors.designation.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter the designation
                </label>
              )}
              {errors.designation && errors.designation.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid designation
                </label>
              )}
            </div>
            <div className="mb-6">
              <label
                for="about"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                About
              </label>
              <textarea
                id="about"
                {...register("about", {
                  required: true,
                  maxLength: 300,
                })}
                placeholder="Enter about (max 300 characters)"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              {errors.about && errors.about.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter an about
                </label>
              )}

              {errors.about && errors.about.type === "maxLength" && (
                <label className="error-msg text-sm text-red-600">
                  About must not exceed 300 characters
                </label>
              )}
            </div>
            <label
              for="photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employee's Photo
            </label>
            <div className="flex items-center justify-between w-full ">
              <label
                for="photo"
                className="flex flex-col items-center justify-center w-1/2 h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>

                <input
                  id="photo"
                  {...register("photo", { required: true })}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhoto}
                />
              </label>

              <div className="w-1/2 p-3 h-52">
                <div className="border border-white h-full">
                  {previewImage && (
                    <img
                      className="w-full h-full object-contain"
                      src={previewImage}
                      alt="Preview"
                    />
                  )}
                </div>
              </div>
            </div>
            {errors.photo && errors.photo.type === "required" && (
              <label className="error-msg text-sm text-red-600">
                Please upload a photo of employee
              </label>
            )}

            <div className="w-full h-28 flex justify-center items-center">
              <div className="w-1/2">
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/team");
                  }}
                  className=" border border-red-500 text-red-500 hover:bg-red-500 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_team;
