import React from "react";
import { MdDelete } from "react-icons/md";
import("../Component-style/pass_show.css");

const PassShow = (props) => {
  const delete_entry = () => {
    console.log("pressed");
  };

  return (
    <div className="pass_show">
      <h1>USERNAME : </h1>
      <h1>myusername</h1>
      <div className="gap"></div>
      <h1>PASSWORD : </h1>
      <h1>passwordmine</h1>
      <div className="gap"></div>
      <MdDelete size={35} onClick={delete_entry} />
    </div>
  );
};

export default PassShow;
