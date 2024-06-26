import React, { useState } from "react";
import { BromagLogo, Lookout2 } from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ServerAPI } from "../../../config/backendApi";
import axios from "axios";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };
  const handleLoginSubmit = async (data) => {
    const response = await axios.post(`${ServerAPI}login`, {
      data: data,
    });

    if (response.data.success) {
      localStorage.setItem(
        "access",
        JSON.stringify(response.data.necessaryData.token)
      );
      // let impData = response.data.necessaryData;
      // dispatch(companyDetails(impData));
      toast.success(response.data.message, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#B00043",
          color: "#fff",
        },
      });
      navigate("/dashboard");
    } else {
      console.log(response.data.message);
    }
  };

  return (
    <div>
      {/* <section class="bg-gray-50 dark:bg-gray-900"> */}
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Lookout2})` }}
      >
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-24 h-20 mr-2" src={BromagLogo} alt="logo" />
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleLoginSubmit)}
              >
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter username
                  </label>

                  <div className="form-input">
                    <input
                      type="text"
                      name="username"
                      {...register("username", { required: true })}
                      id="username"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="username"
                      required=""
                    />
                  </div>
                  {errors.username && errors.username.type === "required" && (
                    <label className="text-red-500 text-sm">
                      * Please enter the username
                    </label>
                  )}
                </div>
                <div className="relative">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    {...register("password", { required: true })}
                    type={show ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    className="eye-btn absolute right-4 pb-10 transform -translate-y-1/2"
                    onClick={handleShow}
                  >
                    {show ? <IoEyeOff /> : <IoEye />}
                  </button>
                  <label className="text-red-500 text-sm h-5">
                    {errors.password && errors.password.type === "required" ? (
                      <>* Please enter the password</>
                    ) : null}
                  </label>
                </div>
                {/* <div class="flex items-center justify-between">
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  onClick={handleLoginSubmit}
                  class="w-full text-white bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
