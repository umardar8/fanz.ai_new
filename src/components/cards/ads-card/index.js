import React from "react";
import { ads } from "../../../assets";

export default function AdsCard(props) {
  const { btnClassName } = props;
  const addCard = {
    maxWidth: " 22vw",
    borderRadius: "20px",
    background: "linear-gradient(to bottom, #5436A9, #000000)",
    padding: "15px",
    color: "white",
    fontFamily: "Montserrat",
    flexDirection: " column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div className={btnClassName ? btnClassName : "card adsCard"} style={addCard}>
        <div className="card-body">
          <div>
            <p style={{ textAlign: "right", color: "yellow" }}>ADS</p>
          </div>
          <h5
            className="card-title"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            TRY OUR NEW PRODUCT
          </h5>
          <img
            src={ads}
            className="card-img-top"
            alt="Advertisement"
            style={{ width: " 283px", height: " 280px" }}
          />
        </div>
      </div>
    </>
  );
}
