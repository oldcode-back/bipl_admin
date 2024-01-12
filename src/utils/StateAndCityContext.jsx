import React, { createContext, useContext, useEffect, useState } from "react";

const StateAndCityContext = createContext();

export const StateAndCityProvider = ({ children }) => {
  const [state, setState] = useState(localStorage.getItem("state") || "");
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [loading, setLoading] = useState(true);

  const setCityAndState = (newState, newCity) => {
    setState(newState);
    setCity(newCity);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setState(localStorage.getItem("state") || "");
      setCity(localStorage.getItem("city") || "");
    };

    window.addEventListener("storage", handleStorageChange);
    setLoading(false);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [state, city]);

  return (
    <StateAndCityContext.Provider
      value={{ state, city, setCityAndState, loading }}
    >
      {children}
    </StateAndCityContext.Provider>
  );
};

export const useStateAndCity = () => {
  return useContext(StateAndCityContext);
};
