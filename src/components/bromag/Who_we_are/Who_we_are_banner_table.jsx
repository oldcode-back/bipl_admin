import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ServerAPI } from "../../../config/backendApi";
import axios from "axios";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { Image } from "antd";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const Who_we_are_banner_table = () => {
  const [WhoWeAreBanners, setWhoWeAreBanners] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleWhoWeAreBanners = async () => {
      try {
        const response = await axios.get(`${ServerAPI}whoWeAreBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setWhoWeAreBanners(response.data.WhoWeAreBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleWhoWeAreBanners();
    }
  }, [state, city, loading, refresh]);

  const handleBannerDrop = async (bannerId) => {
    try {
      const response = await axios.post(`${ServerAPI}deleteWhoWeAreBanner`, {
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
          Who We Are Page Banners
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-who-we-are-banner");
            }}
            disabled={WhoWeAreBanners.length >= 5}
            className={`text-white px-5 py-2.5 me-2 mb-2 rounded-lg text-sm focus:outline-none ${
              WhoWeAreBanners.length >= 5
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
              {WhoWeAreBanners &&
                WhoWeAreBanners.map((Banner, i) => (
                  <tr
                    key={Banner._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4">{Banner.bannerName}</td>
                    <td className="px-6 py-4">
                      <Image
                        width={150}
                        height={100}
                        src={Banner.bannerPic}
                        preview={{
                          src: Banner.bannerPic,
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <button
                        onClick={() => {
                          navigate(`/update-whoWeAre-banner/${Banner._id}`);
                        }}
                        class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                      >
                        <FaEdit class="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => {
                          handleBannerDrop(Banner._id);
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

export default Who_we_are_banner_table;
