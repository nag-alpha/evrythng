import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PassAdd from "../Components/PassAdd";
import PassShow from "../Components/PassShow";

const Vault = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getDetails = async () => {
    try {
      const details = await axios.get("/vault");
      setData(details.data);
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/password_manager");
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <PassAdd />
      {data.map(PassShow)}
    </div>
  );
};

export default Vault;
