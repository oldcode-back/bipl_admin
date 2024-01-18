import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ServerAPI } from "../../../config/backendApi";
import axios from "axios";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { Image } from "antd";
import toast from "react-hot-toast";

const Lookout_table = () => {
  const [LookoutData, setLookoutData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleLookoutData = async () => {
      try {
        const response = await axios.get(`${ServerAPI}lookoutData`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setLookoutData(response.data.LookoutData);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleLookoutData();
    }
  }, [state, city, loading, refresh]);

  const handleLookoutDrop = async (lookoutId) => {
    try {
      const response = await axios.post(`${ServerAPI}deleteLookoutData`, {
        lookoutId: lookoutId,
      });
      if (response.data.success) {
        if (refresh === true) {
          setRefresh(false);
        } else {
          setRefresh(true);
        }
        toast.success(response.data.message, {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#B00043",
            color: "#fff",
          },
        });
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
      console.log(error);
    }
  };

  const restaurantData = [
    { id: 1, name: "Saravana Bhavan", location: "Chennai", active: true },
    { id: 2, name: "Murugan Idli Shop", location: "Madurai", active: true },

    { id: 4, name: "Aasife Biryani", location: "Chennai", active: true },
    { id: 5, name: "The French Loaf", location: "Chennai", active: true },
  ];

  return (
    <div class="p-4  w-full xs:ml-80">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h3 className="w-full text-center text-xl text-black ">
          Lookout Videos
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-lookout-videos");
            }}
            disabled={LookoutData.length >= 3}
            className={`text-white px-5 py-2.5 me-2 mb-2 rounded-lg text-sm focus:outline-none ${
              LookoutData.length >= 3
                ? "bg-gray-600 cursor-not-allowed opacity-60"
                : "bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            }`}
          >
            Add Videos
          </button>
        </div>
        <div className="overflow-x-auto mt-4 h-[536px]">
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SI No
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>

                <th scope="col" className="px-6 py-3">
                  Lookout video
                </th>
                <th scope="col" className="px-6 py-3 flex justify-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {LookoutData.map((item, i) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{item.description}</td>

                  <td className="px-6 py-4">
                    <video
                      width={150}
                      height={100}
                      onClick={() => openModal(item.lookoutVideo)}
                    >
                      <source src={item.lookoutVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </td>

                  {isModalOpen && selectedVideo && (
                    <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] bg-black bg-opacity-75 flex justify-center items-center">
                      <div className="relative">
                        <video
                          className="w-full h-full z-5 rounded-xl overflow-hidden"
                          controls
                          autoPlay
                        >
                          <source src={selectedVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          className="absolute top-2 right-2 rounded-md px-3 text-white text-sm bg-red-500 cursor-pointer"
                          onClick={closeModal}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <button
                      onClick={() => {
                        navigate(`/update-lookout/${item._id}`);
                      }}
                      class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                    >
                      <FaEdit class="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => {
                        handleLookoutDrop(item._id);
                      }}
                      class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                    >
                      <MdDelete class="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Lookout_table;
