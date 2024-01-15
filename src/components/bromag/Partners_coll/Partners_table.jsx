/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ServerAPI } from "../../../config/backendApi";
import axios from "axios";
import { useStateAndCity } from "../../../utils/StateAndCityContext";

const Partners_table = () => {
  const [PartnersData, setPartnersData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handlePartnersData = async () => {
      try {
        const response = await axios.get(`${ServerAPI}partnersData`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setPartnersData(response.data.PartnersData);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handlePartnersData();
    }
  }, [state, city, loading, refresh]);

  const handleRestaurantDrop = async (restaurantId) => {
    try {
      const response = await axios.post(`${ServerAPI}deletePartnersData`, {
        restaurantId: restaurantId,
      });

      if (refresh === true) {
        setRefresh(false);
      } else {
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restaurantData = [
    { id: 1, name: "Saravana Bhavan", location: "Chennai", active: true },
    { id: 2, name: "Murugan Idli Shop", location: "Madurai", active: true },
    {
      id: 3,
      name: "Prems Graama Bhojanam",
      location: "Coimbatore",
      active: true,
    },
    { id: 4, name: "Aasife Biryani", location: "Chennai", active: true },
    { id: 5, name: "The French Loaf", location: "Chennai", active: true },
  ];

  return (
    <div className="p-4 w-full xs:ml-80">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h3 className="w-full text-center text-xl text-black ">
          Partners Restaurant
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-partners");
            }}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
                <th scope="col" className="px-6 py-3 flex justify-center">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {PartnersData.map((restaurant, i) => (
                <tr
                  key={restaurant._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{restaurant.restaurant}</td>
                  <td className="px-6 py-4">{restaurant.location}</td>
                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <button
                      onClick={() => {
                        navigate(`/update-partners/${restaurant._id}`);
                      }}
                      className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                    >
                      <FaEdit class="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => {
                        handleRestaurantDrop(restaurant._id);
                      }}
                      className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
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

export default Partners_table;
