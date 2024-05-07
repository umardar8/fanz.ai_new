import React from "react";
import BaseColors from "../../../constant";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import PrimaryButton from "../../button";
import { FaWifi } from "react-icons/fa6";

export default function LiveStreamCard(props) {
  return (
    <div className="col-11 col-md-4 col-3 pb-5">
      <img
        src={props.cardimg}
        alt=""
        style={{ height: "25vh" }}
        className="rounded shadow-1 mb-2 "
      />
      <div className="d-flex justify-content-between  py-1">
        <div className="text-family fs-4 fw-normal text-white">
          {props.head}
        </div>
        <PrimaryButton
          label="Live"
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
