import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ServerAPI } from "../../../config/backendApi";
import axios from "axios";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { Image } from "antd";
import toast from "react-hot-toast";

const Work_with_us_banner_table = () => {
  const [WorkWithUsBanners, setWorkWithUsBanners] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleWorkWithUsBanners = async () => {
      try {
        const response = await axios.get(`${ServerAPI}workWithUsBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setWorkWithUsBanners(response.data.WorkWithUsBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleWorkWithUsBanners();
    }
  }, [state, city, loading, refresh]);

  const handleBannerDrop = async (bannerId) => {
    try {
      const response = await axios.post(`${ServerAPI}deleteWorkWithUsBanner`, {
        bannerId: bannerId,
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
          Work With Us Banners
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-work-with-us-banner");
            }}
            disabled={WorkWithUsBanners.length >= 5}
            className={`text-white px-5 py-2.5 me-2 mb-2 rounded-lg text-sm focus:outline-none ${
              WorkWithUsBanners.length >= 5
                ? "bg-gray-600 cursor-not-allowed opacity-60"
                : "bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            }`}
          >
            Add Banner
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
                  Banner name
                </th>
                <th scope="col" className="px-6 py-3">
                  Banner Image
                </th>

                <th scope="col" className="px-6 py-3 flex justify-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {WorkWithUsBanners &&
                WorkWithUsBanners.map((item, i) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4">{item.bannerName}</td>
                    <td className="px-6 py-4">
                      <Image
                        width={150}
                        height={100}
                        src={item.bannerPic}
                        preview={{
                          src: item.bannerPic,
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 flex justify-center space-x-2 items-center">
                      <button
                        onClick={() => {
                          handleBannerDrop(item._id);
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

export default Work_with_us_banner_table;
