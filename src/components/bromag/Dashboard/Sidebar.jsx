import React, { useState } from "react";
import { BromagLogo } from "../../../assets/images";
import { MdArrowDropDown, MdOutlineStarRate } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [collections, setCollections] = useState(false);
  const [banners, setBanners] = useState(false);


  const navigate = useNavigate();

  const handleCollection = () => {
    setCollections(!collections);
  };

  const handleBanners = () => {
    setBanners(!banners);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-3 overflow-y-auto bg-black dark:bg-gray-800">
          <div class="flex items-center mb-5">
            <img
              src={BromagLogo}
              class="h-10 w-8 sm:h-7 "
              alt="Flowbite Logo"
            />
            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Bromag India Pvt Ltd
            </span> */}
            <select
              name="state"
              id="state"
              className="w-32 text-center py-1 bg-white border text-xs border-black rounded-lg focus:outline-none px-1"
            >
              <option value="">Select your state</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              name="state"
              id="state"
              className="w-28 text-center py-1 px-1 ml-2 bg-white border text-xs border-black rounded-lg focus:outline-none"
            >
              <option value="">Select your city</option>
              <option value="">City 1</option>
              <option value="">City 2</option>
              <option value="">City 3</option>
            </select>
          </div>
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                onClick={handleCollection}
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Collections</span>
                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  <MdArrowDropDown />
                </span>
              </a>
            </li>
            {collections && (
              <li>
                <a
                  onClick={() => {
                    setCollections(true);
                    navigate("/partners");
                  }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center  whitespace-nowrap">
                    Partners restaurant
                  </span>
                </a>
                <a
                  onClick={() => {
                    setCollections(true);
                    navigate("/must-visit");
                  }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center ms-2 whitespace-nowrap">
                    Must visit restaurant
                  </span>
                </a>
                <a
                  onClick={() => {
                    setCollections(true);
                    navigate("/upcoming");
                  }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center ms-4 whitespace-nowrap">
                    Upcoming restaurant
                  </span>
                </a>
              </li>
            )}

            <li>
              <a
                onClick={handleBanners}
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Banners</span>
                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  <MdArrowDropDown />
                </span>
              </a>
            </li>
            {banners && (
              <li>
                <a
                  // onClick={()=>{
                  //     setCollections(true)
                  //     navigate("/partners")
                  // }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center  whitespace-nowrap">
                    Partners restaurant
                  </span>
                </a>
                <a
                  // onClick={()=>{
                  //     setCollections(true)
                  //     navigate("/must-visit")
                  // }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center ms-2 whitespace-nowrap">
                    Must visit restaurant
                  </span>
                </a>
                <a
                  //   onClick={()=>{
                  //     setCollections(true)
                  //     navigate("/upcoming")
                  // }}
                  class="flex justify-center items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex justify-center ms-4 whitespace-nowrap">
                    Upcoming restaurant
                  </span>
                </a>
              </li>
            )}

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RiTeamFill class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="flex-1 ms-3 whitespace-nowrap">Teams</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BiSolidVideos class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  Lookout our videos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineStarRate class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="flex-1 ms-3 whitespace-nowrap">Testimonials</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
