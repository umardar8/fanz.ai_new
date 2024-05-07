import { useState } from 'react';
import useSWR from 'swr';
import WeatherCard from '../cards/weather-card';
import '../../App.css';

const WeatherPanel = (props) => {
    const {
        btnClassName,
      } = props;
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
        base: 'http://api.weatherapi.com/v1/current.json',
        key: '3aa4bf838d804c0cb33120407240902'
    }

    // Making API call and saving weather data.
    const {
        data: weather1,
        error,
        isValidating,
    } = useSWR(`${api.base}?key=${api.key}&q=${latitude},${longitude}&aqi=no`, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;


    // convert API returned time-data into desired format.
    const formatTime = (weather) => {
        const [date, time] = weather.location.localtime.split(" ");
        var [h, m] = time.split(":");
        var H = h > 12 ? h - 12 : h;
        if (H == 0) { H = 12 }
        var ampm = h > 11 ? " pm" : " am";
        var converted = H + ":" + m + ampm;
        return converted;
    };

    return (
        <div className={btnClassName ? btnClassName :'weatherPanel'} >
            <WeatherCard weather={weather1} time={formatTime(weather1)}/>
            <WeatherCard weather={weather1} time={formatTime(weather1)}/>
            <WeatherCard weather={weather1} time={formatTime(weather1)}/>
            <WeatherCard weather={weather1} time={formatTime(weather1)}/>
        </div>
    );
};

export default WeatherPanel;