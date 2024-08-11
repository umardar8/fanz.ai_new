import React from "react";
import { HeroImage } from "../../../assets";
import { FaStar } from "react-icons/fa";
import BaseColors from "../../../constant";

export default function TopStoryCard() {
  return (
    <div className="row m-0 pt-2">
      <div className="col-4">
        <img
          className="shadow-lg"
          src={HeroImage}
          style={{
            height: "10vh",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="col-8 text-start">
        <h6 className="text-white text-size-1">It is a long established fact.</h6>
        <h6 className="text-size-1" style={{ color: BaseColors.textDarkGrey }}>2024</h6>
        <div className="d-flex align-items-center">
          <FaStar size={11} color={BaseColors.yellow} className="mb-2"/>
          <h6 className="px-2 text-size-1" style={{ color: BaseColors.yellow }}>
            7.3
          </h6>
        </div>
      </div>
    </div>
  );
}
