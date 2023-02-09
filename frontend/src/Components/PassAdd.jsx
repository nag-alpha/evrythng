import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Component-style/pass_add.css";

function PassAdd() {
  const reload = () => window.location.reload(true);
  const [details, setDetails] = useState({
    site: "",
    username: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/vault", details);
      window.alert("Successfully added");
      reload();
    } catch (err) {
      if (err.response.status === 400) {
        throw window.alert("Insufficient details");
      } else if (err.response.status === 409) {
        throw window.alert("Invalid credentials");
      } else {
        console.log(err);
      }
    }
  };
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post("/logout", { withCredentials: true });
      if (res.status === 200) {
        window.alert("Logging you out");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add_box">
      <h1 className="head">
        Enter details to add into your vault and press SAVE
      </h1>
      <form method="POST">
        <label htmlFor="site">SITE NAME: </label>
        <input type="text" name="site" onChange={handle} />
        <label htmlFor="username">USERNAME: </label>
        <input type="text" name="username" onChange={handle} />
        <label htmlFor="password">PASSWORD: </label>
        <input type="text" name="password" onChange={handle} />
        <button type="submit" onClick={submit}>
          SAVE
        </button>
        <h1 className="logout" onClick={logout}>
          Click here to Logout
        </h1>
      </form>
    </div>
  );
}

export default PassAdd;
