import React from "react";
import BaseColors from "../../../constant";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const Tcards = (props) => {
  return (
    <div className="px-3">
      <img
        src={props.thumb}
        alt=""
        style={{ height: "37vh" }}
        className="rounded shadow-1 mb-2 "
      />
      <div className="text-family fs-4 fw-normal text-white">{props.head}</div>
      <div style={{ color: BaseColors.textGrey, fontSize: "0.9rem" }}>
        {props.year}
      </div>
      <div className=" d-flex justify-content-between pe-3 py-1">
        <div className="d-flex">
          <FaStar size={12} color={BaseColors.yellow} />
          <div
            className="px-2 text-family fs-6 fw-normal"
            style={{ color: BaseColors.yellow, fontSize: "0.9rem" }}
          >
            7.3
          </div>
        </div>
        <div className="d-flex">
          <LuEye size={16} color={BaseColors.white} className="me-2" />
          <IoMdHeart size={16} color={BaseColors.danger} className="me-1" />
        </div>
      </div>
    </div>
  );
};

export default Tcards;
