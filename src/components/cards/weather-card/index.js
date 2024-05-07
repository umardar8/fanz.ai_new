const WeatherCard = ({ weather, time }) => {
  return (
    <div className="weatherCard row mx-0 align-items-center">
      <div className="col-7 temperature d-flex p-0">
        <div>
          <img
            src={weather.current.condition.icon}
            alt="weather icon"
            style={{ height: 38, width: 38 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: 400,
            }}
          >
            {weather.current.temp_f} °F
          </div>
        </div>
        <div>
          <div
            className="heading-2 fw-normal"
            style={{
              paddingRight: 10,
              paddingTop: 10,
            }}
          >
            {weather.location.name}
          </div>
        </div>
      </div>

      <div className="col-5 dateTime">
        <div
          className="heading-2 fw-bolder"
          style={{
            textAlign: "right",
            lineHeight: "3.8rem",
          }}
        >
          {time}
        </div>
        <div
          className="text-family "
          style={{
            fontSize: 9,
            fontWeight: 400,
            textAlign: "right",
            // marginTop: -20,
          }}
        >
          Saturday, 24 Feb
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
