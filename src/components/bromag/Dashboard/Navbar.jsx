import React, { useEffect, useState } from "react";
import { BromagLogo, India } from "../../../assets/images";
import { MdLocationPin, MdArrowDropDown } from "react-icons/md";
import { fetchStatesAndCities } from "../../../utils/fetchStateAndCities";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { isEmpty } from "lodash";

const Navbar = () => {
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [indianStates, setIndianStates] = useState([]);
  const [indianCities, setIndianCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const { state, city, setCityAndState } = useStateAndCity();
  const [dummy, setDummy] = useState(false);

  console.log(state, isEmpty(city), "aakbjhwqgefheug");

  const handleStateSubmit = (state) => {
    localStorage.setItem("state", state.target.value);
    setSelectedState(state.target.value);
    setCityAndState(state.target.value, "");
    localStorage.removeItem("city");
    setDummy(true);
  };

  console.log(isEmpty(city), dummy);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { states, cities } = await fetchStatesAndCities();
      setIndianStates(states);
      setIndianCities(cities);
    } catch (error) {
      console.error("Error fetching Indian states and cities:", error);
    }
  };

  const handleCitySubmit = (city) => {
    console.log(city, "selected");
    localStorage.setItem("city", city);
    setCityName(city);
    fetchData();
    setCityAndState(state, city);
  };

  useEffect(() => {
    const currentState = localStorage.getItem("state");
    setStateName(currentState);
    setSelectedState(currentState);

    const currentCity = localStorage.getItem("city");
    if (currentCity !== undefined && currentCity !== null) {
      setCityName(currentCity);
    }
  }, [
    selectedState,
    localStorage.getItem("state"),
    localStorage.getItem("city"),
    cityName,
    stateName,
  ]);

  const filteredCities = indianCities[stateName] || [];

  return (
    <div>
      <div className="relative w-full h-[80px] bg-black">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-[102px] h-[91px]"
                  alt="Bromag Logo"
                  src={BromagLogo}
                />
                <div className="ml-4 flex items-center">
                  <div className="relative">
                    <div className="w-[180px] h-[33px] bg-neutral-100 rounded-lg overflow-hidden">
                      <img
                        src={India}
                        alt="india"
                        className="w-[17px] h-[13px] absolute top-[50%] transform -translate-y-1/2 left-2"
                      />
                      <select
                        name="state"
                        id="state"
                        onChange={(e) => {
                          handleStateSubmit(e);
                        }}
                        className="w-full text-center py-1 bg-transparent placeholder:text-black appearance-none focus:outline-none px-1"
                      >
                        {/* <option value={"Select city"} className={`${isEmpty(state) ?"block":"hidden"}`}>Select State</option> */}
                        <option value="">
                          {stateName === "" || stateName === undefined
                            ? "Select state name"
                            : stateName}
                        </option>

                        {indianStates.map((res, index) => (
                          <option key={index} value={res}>
                            {res}
                          </option>
                        ))}
                      </select>
                      <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2" />
                    </div>
                  </div>
                  <div className="ml-4 relative">
                    <div className="w-[170px] h-[33px] bg-neutral-100 rounded-lg overflow-hidden relative">
                      <MdLocationPin className="w-[20px] h-[18px] absolute top-[50%] transform -translate-y-1/2 left-2" />
                      <select
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => handleCitySubmit(e.target.value)}
                        className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                      >
                        <option
                          value={"Select city"}
                          className={`${
                            isEmpty(city) && dummy ? "block" : "hidden"
                          }`}
                        >
                          Select City
                        </option>
                        {filteredCities.map((data, i) => {
                          return (
                            <>
                              <option key={i} value={data}>
                                {data}
                              </option>
                            </>
                          );
                        })}
                      </select>

                      <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
