import "../../../App.css";

const WeatherCard = ({ name, temp, icon, date, time }) => {
  return (
    <div 
      className="d-flex row mx-0 px-0 py-2 mt-3 align-items-center justify-content-center overflow-hidden"
      style={{ backgroundColor: '#141c29', borderRadius: '15px' }}
    >
      {/* <div className="col-7 temperature d-flex p-0"> */}
        <div className="d-flex row col-2 p-0 m-0">
          <img
            src={icon}
            alt="weather icon"
            height='3rem'
            width='3rem'
          />
          <div
            className="text-size-2 d-flex fw-bolder">
            {temp} °F
          </div>
        </div>
        <div className="col-6 fw-normal text-size-1 py-4 ps-1">
          {/* <div className="fw-normal text-size-1 p-4"> */}
            {name}
          {/* </div> */}
        </div>
      {/* </div> */}

      {/* <div className="col-5 dateTime"> */}
        <div className="col-4">
          <div className="fw-bolder text-size-1 text-end pb-2">
            {time}
          </div>
          <div
            className="text-family text-size-2"
            style={{
              fontWeight: 400,
              textAlign: "right",
              // marginTop: -20,
            }}
          >
            {date}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default WeatherCard;