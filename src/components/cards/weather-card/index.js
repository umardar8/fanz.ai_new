import "../../../App.css";

const WeatherCard = ({ name, temp, icon, date, time }) => {
  return (
    <div
      className="d-flex row mx-0 px-0 py-2 mt-3 align-items-center justify-content-center overflow-hidden"
      style={{ backgroundColor: "#141c29", borderRadius: "15px" }}
    >
      {/* <div className="col-7 temperature d-flex p-0"> */}
        <div className="d-flex row col-3 p-0 m-0">
          <img
            src={icon}
            alt="weather icon"
            height='3rem'
            width='3rem'
          />
          <div
            className="text-size-0 d-flex justify-content-center">
            {temp} °F
          </div>
        </div>
        <div className="col-5 fw-600 text-size-1 py-4 ps-1">
          {/* <div className="fw-normal text-size-1 p-4"> */}
            {name}
          {/* </div> */}
        </div>
      {/* </div> */}

      {/* <div className="col-5 dateTime"> */}
        <div className="col-4">
          <div className=" text-size-1 fw-600 text-end pb-2">
            {time}
          </div>
          <div
            className="text-size-0 text-end"
          >
            {date}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default WeatherCard;
