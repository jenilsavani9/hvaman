import React, { useContext } from 'react'
import DataContext from '../contexts/dataContext'

function Cards(props) {
    const { data_json } = useContext(DataContext);

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Location</div>
                    <div className="card-body">
                        <h5 className="card-title">{data_json.location.name}</h5>
                        <h6 className="card-title">{data_json.location.region}, {data_json.location.country}</h6>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Geographic Coordinate</div>
                    <div className="card-body">
                        <h5 className="card-title">Latitude : {data_json.location.lat}</h5>
                        <h5 className="card-title">Longitude : {data_json.location.lon}</h5>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Date & Time</div>
                    <div className="card-body">
                        <h5 className="card-title">Date : {data_json.location.localtime.slice(0,10)}</h5>
                        <h5 className="card-title">Time : {data_json.location.localtime.slice(10)}</h5>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Timezone</div>
                    <div className="card-body">
                        <h5 className="card-title">{data_json.location.tz_id}</h5>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Temperature</div>
                    <div className="card-body">
                        <h5 className="card-title">Celsius : {data_json.current.temp_c}</h5>
                        <h5 className="card-title">Fahrenheit : {data_json.current.temp_f}</h5>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Condition</div>
                    <div className="card-body">
                        <img src={data_json.current.condition.icon}></img>
                        <h5 className="card-title">{data_json.current.condition.text}</h5>
                    </div>
                </div>
            </div>

            <div className='col'>  
                <div className={`card text-${props.text} bg-${props.mode} mb-3`} style={{ "maxWidth": "18rem" }}>
                    <div className="card-header">Wind Speed</div>
                    <div className="card-body">
                        <h5 className="card-title">MPH : {data_json.current.wind_mph}</h5>
                        <h5 className="card-title">KPH : {data_json.current.wind_kph}</h5>
                        <h5 className="card-title">Gegree : {data_json.current.wind_degree}</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards