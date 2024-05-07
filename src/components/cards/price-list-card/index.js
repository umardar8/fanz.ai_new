import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { mi } from "../../../assets";

export default function PriceListCard(props) {
  const { btnClassName } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "#282828",
          borderRadius: "15px",
          padding: "15px 7px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={btnClassName}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "22px",
            height: "87px",
            background: "linear-gradient(to bottom, #5436A9, #000000)",
            marginBottom: "20px",
          }}
        >
          <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
          <div
            className="pt-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <p style={{ lineHeight: "1rem" }}>Xiomi</p>
            <p className="fs-4 fw-4">$134.6</p>
          </div>
          <IoArrowForwardCircleOutline
            size={24}
            style={{ color: "white", backgroundColor: "transparent" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "22px",
            height: "87px",
            background: "linear-gradient(to bottom, #5436A9, #000000)",
            marginBottom: "20px",
          }}
        >
          <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
          <div
            className="pt-3"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <p style={{ lineHeight: "1rem" }}>Xiomi</p>
            <p className="fs-4 fw-4">$134.6</p>
          </div>
          <IoArrowForwardCircleOutline
            size={24}
            style={{ color: "white", backgroundColor: "transparent" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "22px",
            height: "87px",
            background: "linear-gradient(to bottom, #5436A9, #000000)",
            marginBottom: "20px",
          }}
        >
          <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
          <div
            className="pt-3"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <p style={{ lineHeight: "1rem" }}>Xiomi</p>
            <p className="fs-4 fw-4">$134.6</p>
          </div>
          <IoArrowForwardCircleOutline
            size={24}
            style={{ color: "white", backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </>
  );
}
