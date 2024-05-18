import React from "react";
import BaseColors from "../../../constant";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import PrimaryButton from "../../button";
import { FaWifi } from "react-icons/fa6";

export default function LiveStreamCard(props) {
  return (
    <div className="col-sm-12 col-sm-6 col-md-4 pb-5">
      <img
        src={props.cardimg}
        alt=""
        style={{ height: "25vh" }}
        className="rounded shadow-1 mb-2 w-100 "
      />
      <div className="d-flex justify-content-between py-1">
        <div className="text-family fw-normal text-white pe-2 col-xs-8"
        style={{fontSize: "calc(0.8em + 1vw)"}}>
          {props.head}
        </div>
        <PrimaryButton
          btnClassName="col-xs-4"
          label="Live"
          size="sm"
          btnStyle={{                
            background: "#FE4703",
            color: "white",
          }}
          leftIcon={<FaWifi />}
        />
      </div>
      <div style={{ color: BaseColors.textGrey, fontSize: "0.9rem" }}>
        {props.year}
      </div>
    </div>
  );
}
