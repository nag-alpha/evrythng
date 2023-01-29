import React from "react";
import img_blocks from "../Components/images_cards";
import Card from "../Components/Card";
import "../Pages-Style/Image.css";

const Image = () => {
  return <div className="image_page">{img_blocks.map(Card)}</div>;
};

export default Image;
