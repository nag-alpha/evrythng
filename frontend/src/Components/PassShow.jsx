import React from "react";
import { MdDelete } from "react-icons/md";
import("../Component-style/pass_show.css");

function PassShow(props) {
  const delete_entry = () => {
    console.log("pressed");
  };

  return (
    <div className="pass_show" key={props._id}>
      <div className="site_name">{props.site}</div>
      <div className="contents">
        <div className="username">USERNAME : {props.username}</div>
        <div className="password">PASSWORD : {props.password}</div>
      </div>
      <div className="remove">
        <MdDelete size={35} onClick={delete_entry} />
      </div>
    </div>
  );
}

export default PassShow;
