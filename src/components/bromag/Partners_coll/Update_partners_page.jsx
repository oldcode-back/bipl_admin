import axios from "axios";
import React, { useEffect, useState } from "react";
import { ServerAPI } from "../../../config/backendApi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useStateAndCity } from "../../../utils/StateAndCityContext";

const Update_partners_page = () => {
  const [restaurantPic, setRestaurantPic] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleRestaurantPic = (e) => {
    if (!e.target.files) {
      return;
    }
    const image = e.target.files[0];
    setRestaurantPic(image);
    const imageUrl = URL.createObjectURL(image);
    setPreviewImage(imageUrl);
  };

  const { restaurantId } = useParams();

  const { state, city } = useStateAndCity();
  console.log(state, city, "state and city having");

  const handleUpdatePartners = async (data) => {
    try {
      const formData = new FormData();
      formData.append("restaurantPic", restaurantPic);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("restaurantId", restaurantId);

      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await axios.put(
        `${ServerAPI}updatePartners/${restaurantId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        navigate("/partners");
      } else {
        // Display error toast
        console.log(response.data.message);
        // toastError(response.data.message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${ServerAPI}getPartnerToUpdate/${restaurantId}`
        );
        if (response.data.success) {
          const restaurantData = response.data.RestaurantData;
          setValue("restaurant", restaurantData.restaurant);
          setValue("location", restaurantData.location);
          setValue("link", restaurantData.link);
          setValue("restaurantPic", restaurantData.restaurantPic);
          if (restaurantData.restaurantPic) {
            setRestaurantPic(restaurantData.restaurantPic);
            const imageUrl = restaurantData.restaurantPic;
            if (setPreviewImage) {
              setPreviewImage(imageUrl);
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
  }, [state, city, restaurantId, setValue]);

  return (
    <div className="p-4 w-full">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700  flex justify-center">
        <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(handleUpdatePartners)}>
            <div className="mb-6">
              <h3 className="w-full text-center text-xl text-black my-5">
                Update Partners Restaurant
              </h3>
              <label
                for="restaurant"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Restaurant Name
              </label>
              <input
                type="text"
                id="restaurant"
                {...register("restaurant", {
                  required: true,
                  pattern: /^[a-zA-Z0-9'-]+(?:\s[a-zA-Z0-9'-]+)*$/,
                })}
                placeholder="Enter restaurant name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.restaurant && errors.restaurant.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter the restaurant name
                </label>
              )}
              {errors.restaurant && errors.restaurant.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid restaurant name
                </label>
              )}
            </div>
            <div className="mb-6">
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                {...register("location", {
                  required: true,
                  pattern: /^[a-zA-Z0-9'-]+(?:\s[a-zA-Z0-9'-]+)*$/,
                })}
                placeholder="Enter location"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.location && errors.location.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter the location name
                </label>
              )}
              {errors.location && errors.location.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid location name
                </label>
              )}
            </div>
            <div className="mb-6">
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Web Link
              </label>
              <input
                type="text"
                id="location"
                {...register("link", {
                  required: true,
                  pattern:
                    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/[^\s]*)?$/,
                })}
                placeholder="Enter link"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.link && errors.link.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter the web link name
                </label>
              )}
              {errors.link && errors.link.type === "pattern" && (
                <label className="error-msg text-sm text-red-600">
                  Please enter a valid web link name
                </label>
              )}
            </div>
            <div className="flex items-center justify-between w-full ">
              <label
                for="restaurantPic"
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
                  id="restaurantPic"
                  // {...register("restaurantPic", { required: true })}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleRestaurantPic}
                />
              </label>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                Selected file:{" "}
                {restaurantPic ? restaurantPic : "No file selected"}
              </p> */}
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
            {errors.restaurantPic &&
              errors.restaurantPic.type === "required" && (
                <label className="error-msg text-sm text-red-600">
                  Please upload an image of restaurant
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
                    navigate("/partners");
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

export default Update_partners_page;
