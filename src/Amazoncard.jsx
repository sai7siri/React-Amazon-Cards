import React from "react";
import "./card.css";
import Price from "./Price";

const Amazoncard = ({ title, idx, images, link }) => {
  let oldprices = ["12,495", "11,900", "1,599", "599"];
  let newprices = ["8,999", "9,919", "899", "278"];
  let description = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Touch Surface", "Designed For iPad Pro"],
    ["Designed For iPad Pro", "Intuitive Touch Surface"],
    ["Wireless Mouse 2.4GHz", "Optical Orientaton"],
  ];
  let imgstyles = {
    height: "60px",
    width: "60px", 
    objectFit: "cover",
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={link && link[idx]}>
        <img style={imgstyles} src={images[idx]} alt="image" />
      </a>
      <p className="p1">{description[idx][0]}</p>
      <p className="p2">{description[idx][1]}</p>
      <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
    </div>
  );
};

export default Amazoncard;
