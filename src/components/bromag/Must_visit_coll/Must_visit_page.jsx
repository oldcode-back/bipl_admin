import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import axios from "axios";
import { ServerAPI } from "../../../config/backendApi";
import toast from "react-hot-toast";

const Must_visit_page = () => {
  const [MustVisit, setMustVisit] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleMustVisit = async () => {
      try {
        const response = await axios.get(`${ServerAPI}mustVisit`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setMustVisit(response.data.MustVisit);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleMustVisit();
    }
  }, [state, city, loading, refresh]);

  const handleRestaurantDrop = async (restaurantId) => {
    try {
      const response = await axios.post(`${ServerAPI}deleteMustVisitData`, {
        restaurantId: restaurantId,
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
        if (refresh === true) {
          setRefresh(false);
        } else {
          setRefresh(true);
        }
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
          Must visit Restaurant
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-must-visit");
            }}
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Restaurant
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
                  Restaurant name
                </th>
                <th scope="col" className="px-6 py-3">
                  Restaurant location
                </th>
                <th scope="col" className="px-6 py-3">
                  Restaurant Rate
                </th>
                <th scope="col" className="px-6 py-3 flex justify-center">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {MustVisit &&
                MustVisit.map((restaurant, i) => (
                  <tr
                    key={restaurant._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4">{restaurant.restaurant}</td>
                    <td className="px-6 py-4">{restaurant.location}</td>
                    <td className="px-6 py-4">{restaurant.rate}</td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <button
                        onClick={() => {
                          navigate(`/update-must-visit/${restaurant._id}`);
                        }}
                        class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                      >
                        <FaEdit class="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => {
                          handleRestaurantDrop(restaurant._id);
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

export default Must_visit_page;
