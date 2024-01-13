import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BromagAccess = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  useEffect(() => {
    console.log("access working");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [token]);

  return null;
};

export default BromagAccess;
