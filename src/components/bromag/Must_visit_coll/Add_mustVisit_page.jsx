import React from "react";

const Add_mustVisit_page = () => {
  return (
    <div class="p-4 sm:ml-80">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700  flex justify-center">
        <div class="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="mb-6">
            <h3 className="w-full text-center text-xl text-black my-5">
              Add Must visit Restaurant
            </h3>
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="default-input"
              placeholder="Enter restaurant name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="text"
              id="default-input"
              placeholder="Enter location"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="flex items-center justify-between w-full ">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-1/2 h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
            <div class="w-1/2 p-3 h-52">
              <div class="border border-white h-full">
                <img
                  class="w-full h-full object-contain"
                  src="https://i.pinimg.com/564x/0b/e4/2c/0be42cf9976dc6d08ef89af558618e16.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="w-full h-28 flex justify-center items-center">
            <div class="w-1/2">
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Submit
              </button>
              <button
                type="button"
                class=" border border-red-500 text-red-500 hover:bg-red-500 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_mustVisit_page;
