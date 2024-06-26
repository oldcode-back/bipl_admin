import axios from "axios";
import React, { useEffect, useState } from "react";
import { ServerAPI } from "../../../config/backendApi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { Button, Spin } from "antd";
import toast from "react-hot-toast";

const Lookout_update_page = () => {
  const [lookoutVideo, setLookoutVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleLookoutVideo = (e) => {
    if (!e.target.files) {
      return;
    }
    const video = e.target.files[0];
    setLookoutVideo(video);
    const videoUrl = URL.createObjectURL(video);
    setVideoPreview(videoUrl);
  };

  const { lookoutId } = useParams();

  const { state, city } = useStateAndCity();
  console.log(state, city, "state and city having");

  const handleUpdateLookout = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("lookoutVideo", lookoutVideo);
      formData.append("state", state);
      formData.append("city", city);

      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await axios.put(
        `${ServerAPI}updateLookout/${lookoutId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message, {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#B00043",
            color: "#fff",
          },
        });
        navigate("/lookout-table");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${ServerAPI}getLookoutToUpdate/${lookoutId}`
        );
        if (response.data.success) {
          const LookoutData = response.data.LookoutData;
          setValue("lookoutName", LookoutData.lookoutName);
          setValue("description", LookoutData.description);
          setValue("link", LookoutData.link);
          setValue("lookoutVideo", LookoutData.lookoutVideo);
          if (LookoutData.lookoutVideo) {
            setLookoutVideo(LookoutData.lookoutVideo);
            const vdoUrl = LookoutData.lookoutVideo;
            if (setVideoPreview) {
              setVideoPreview(vdoUrl);
            }
          }
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [state, city, lookoutId, setValue]);

  return (
    <div className="p-4 w-full xs:ml-80">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700  flex justify-center">
        <div className="w-full overflow-x-auto h-[628px] max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(handleUpdateLookout)}>
            <div className="mb-6">
              <h3 className="w-full text-center text-xl text-black my-5">
                Add Lookout Video
              </h3>
              <label
                htmlFor="lookoutName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lookout Name
              </label>
              <input
                type="text"
                id="lookoutName"
                {...register("lookoutName", {
                  required: true,
                  pattern: /^[a-zA-Z0-9'-]+(?:\s[a-zA-Z0-9'-]+)*$/,
                })}
                placeholder="Enter a name for this lookout set"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.lookoutName && errors.lookoutName.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a name for this lookout set
                </label>
              )}
              {errors.lookoutName && errors.lookoutName.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid name for this lookout set
                </label>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: true,
                  maxLength: 300,
                })}
                placeholder="Enter description (max 300 characters)"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              {errors.description && errors.description.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a description
                </label>
              )}

              {errors.description &&
                errors.description.type === "maxLength" && (
                  <label className="error-msg text-sm text-red-600">
                    Description must not exceed 300 characters
                  </label>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="lookoutVideo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lookout Video
              </label>
              <div className="flex items-center justify-between w-full">
                <label
                  htmlFor="lookoutVideo"
                  className="flex flex-col items-center justify-center w-1/2 h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    ></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      MP4 or other video formats
                    </p>
                  </div>
                  <input
                    id="lookoutVideo"
                    {...register("lookoutVideo", { required: true })}
                    type="file"
                    className="hidden"
                    accept="video/*"
                    onChange={handleLookoutVideo}
                  />
                </label>
                {videoPreview && (
                  <div className="w-1/2 p-3 h-52">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      src={videoPreview}
                      alt="Preview"
                    />
                  </div>
                )}
              </div>
              {/* {errors.lookoutVideo &&
                errors.lookoutVideo.type === "required" && (
                  <label className="error-msg text-sm text-red-600">
                    Please upload a video for lookout
                  </label>
                )} */}
            </div>
            <div className="w-full h-28 flex justify-center items-center">
              <div className="w-1/2 flex">
                {/* <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </Button> */}
                <Button
                  type="submit"
                  loading={loading}
                  className="text-white flex justify-center items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 pt-5 pb-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/lookout-table");
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

export default Lookout_update_page;
