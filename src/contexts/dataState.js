import { useState } from "react";
import DataContext from "./dataContext";

const DataState = (props) => {

    const data_initial =
    {
        "location": {
            "name": "London",
            "region": "City of London, Greater London",
            "country": "United Kingdom",
            "lat": 51.52,
            "lon": -0.11,
            "tz_id": "Europe/London",
            "localtime_epoch": 1645432779,
            "localtime": "2022-02-21 8:39"
        },
        "current": {
            "last_updated_epoch": 1645432200,
            "last_updated": "2022-02-21 08:30",
            "temp_c": 8,
            "temp_f": 46.4,
            "is_day": 1,
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
            },
            "wind_mph": 32.2,
            "wind_kph": 51.8,
            "wind_degree": 270,
            "wind_dir": "W",
            "pressure_mb": 1003,
            "pressure_in": 29.62,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 61,
            "cloud": 25,
            "feelslike_c": 3.3,
            "feelslike_f": 38,
            "vis_km": 10,
            "vis_miles": 6,
            "uv": 1,
            "gust_mph": 35.1,
            "gust_kph": 56.5
        }
    }
    const [data_json, setData_json] = useState(data_initial);
    const datafetch = async (location = 'London') => {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=6c6e1a65d78f4ff1a60153938221902&q=${location}&aqi=no`);
        setData_json(await res.json());
    }

    return (
        <DataContext.Provider value={{ datafetch, data_json }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;