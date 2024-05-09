import { useState } from 'react';
import useSWR from 'swr';
import WeatherCard from '../cards/weather-card';
import '../../App.css';

const WeatherPanel = () => {

    // location of user for use in API call.
    // const [location, setLocation] = useState({});
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // get current location of visitor.
    navigator.geolocation.getCurrentPosition(success, err)

    function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    function err() {
        console.log("Unable to retrieve your location");
    }

    // Method and Variables for API call to get weather.
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const api = {
        base: 'https://api.weatherapi.com/v1/forecast.json',
        key: '3aa4bf838d804c0cb33120407240902'
    }

    // Making API call and saving weather data.
    const {
        data: weather,
        error,
        isValidating,
    } = useSWR(`${api.base}?key=${api.key}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    // convert API returned time-data into desired format.
    const format = (dateTime, type) => {
        const [date, time] = dateTime.split(" ");
        const [cdate, ctime] = weather.location.localtime.split(" ");
        const [ch, cm] = ctime.split(":");
        var converted
        if (type === "t") {
            var [h, m] = time.split(":");
            var H = h > 12 ? h - 12 : h;
            if (H === 0) { H = 12 }
            if (H.length === 1) { H = "0" + H}
            var ampm = h > 11 ? " pm" : " am";
            converted = H + ":" + cm + ampm;
        }
        if (type === "d") {
            var dateObj = new Date(date);
            const [y, m, d] = date.split("-")
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            const currentDayOfWeek = daysOfWeek[dateObj.getDay()];
            const currentMonth = months[dateObj.getMonth()];
            converted = currentDayOfWeek + ", " + d + " " + currentMonth;
        }
        return converted;
    };

    const checkError = () => {
        var query = weather.forecast.forecastday[(1)].hour[(0)].temp_f;
        console.log(query)
    }

    const getIndex = (forecastNum, type) => {
        var [date, time] = weather.location.localtime.split(" ");
        var [hour, min] = time.split(":");
        var currentHour = parseInt(hour);
        var index
        if (type === 'd') {            
            if (forecastNum===1) { index = (hour===23) ? 1 : 0; }
            if (forecastNum===2) { index = (hour>=22) ? 1 : 0; }
            if (forecastNum===3) { index = (hour>=21) ? 1 : 0; }
            if (forecastNum===4) { index = (hour>=20) ? 1 : 0; }
        }
        if (type === 'h') {
            var nextHour = (currentHour + forecastNum) % 24;
            index = nextHour < 0 ? 24 + nextHour : nextHour;
        }
        return index;
    }

    var cityName = weather.location.name;
    var current = weather.current;
    var forecast1 = weather.forecast.forecastday[getIndex(1,'d')].hour[getIndex(1,'h')];
    var forecast2 = weather.forecast.forecastday[getIndex(2,'d')].hour[getIndex(2,'h')];
    var forecast3 = weather.forecast.forecastday[getIndex(3,'d')].hour[getIndex(3,'h')];
    var forecast4 = weather.forecast.forecastday[getIndex(4,'d')].hour[getIndex(4,'h')];

    return (
        <div className='weatherPanel'>
            <WeatherCard name={cityName} temp={current.temp_f} icon={current.condition.icon} date={format(weather.location.localtime, "d")} time={format(weather.location.localtime, "t")}/>
            <WeatherCard name={cityName} temp={forecast1.temp_f} icon={forecast1.condition.icon} date={format(forecast1.time, "d")} time={format(forecast1.time, "t")}/>
            <WeatherCard name={cityName} temp={forecast2.temp_f} icon={forecast2.condition.icon} date={format(forecast2.time, "d")} time={format(forecast2.time, "t")}/>
            <WeatherCard name={cityName} temp={forecast3.temp_f} icon={forecast2.condition.icon} date={format(forecast3.time, "d")} time={format(forecast3.time, "t")}/>
            <WeatherCard name={cityName} temp={forecast4.temp_f} icon={forecast2.condition.icon} date={format(forecast4.time, "d")} time={format(forecast4.time, "t")}/>
        </div>
    );
};

export default WeatherPanel;