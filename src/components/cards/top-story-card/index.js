import React from "react";
import { HeroImage } from "../../../assets";
import { FaStar } from "react-icons/fa";
import BaseColors from "../../../constant";

export default function TopStoryCard() {
  return (
    <div className="row m-0 py-2">
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
        <h6 className="text-white fs-5">jmmjclkjzl</h6>
        <h6 style={{ color: BaseColors.textGrey }}>jmmjclkjzl</h6>
        <div className="d-flex">
          <FaStar size={11} color={BaseColors.yellow} />
          <h6 className="px-1" style={{ color: BaseColors.yellow }}>
            7.3
          </h6>
        </div>
      </div>
    </div>
  );
}
