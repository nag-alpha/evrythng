import React from "react";
import { useState } from "react";
import "../Component-style/pass_add.css";

function PassAdd() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add_box">
      <form method="POST">
        <label htmlFor="username">USERNAME: </label>
        <input type="text" name="username" onChange={handle} />
        <label htmlFor="password">PASSWORD: </label>
        <input type="text" name="password" onChange={handle} />
        <button type="submit" onClick={submit}>
          SAVE
        </button>
      </form>
    </div>
  );
}

export default PassAdd;
