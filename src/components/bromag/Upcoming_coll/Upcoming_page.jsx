import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Upcoming_page = () => {
  const navigate = useNavigate();

  const restaurantData = [
    { id: 1, name: "Peshawari", location: "Chennai", active: true },
    { id: 2, name: "Madras Pavilion", location: "Chennai", active: true },
    { id: 3, name: "The Bangala", location: "Karaikudi", active: true },
  ];

  return (
    <div class="p-4 sm:ml-80">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h3 className="w-full text-center text-xl text-black ">
          Upcoming Restaurant
        </h3>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate("/add-upcoming");
            }}
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Restaurant
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
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
              {restaurantData.map((restaurant) => (
                <tr
                  key={restaurant.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{restaurant.id}</td>
                  <td className="px-6 py-4">{restaurant.name}</td>
                  <td className="px-6 py-4">{restaurant.location}</td>
                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <button class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                      <FaEdit class="h-6 w-6" />
                    </button>
                    <button class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
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

export default Upcoming_page;
