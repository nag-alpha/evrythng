import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import("../Component-style/pass_show.css");

function PassShow(props) {
  const reload = () => window.location.reload(true);
  const del = async (id) => {
    try {
      const dbid = id;
      await axios.post("vaultdel", { dbid: dbid });
      window.alert("Deleted Successfully");
      reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pass_show" key={props._id}>
      <div className="site_name">{props.site}</div>
      <div className="contents">
        <div className="username">USERNAME : {props.username}</div>
        <div className="password">PASSWORD : {props.password}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          del(props._id);
        }}
      >
        <MdDelete size={35} />
      </div>
    </div>
  );
}

export default PassShow;
