import React, { useState, useContext } from 'react'
import DataContext from '../contexts/dataContext'

function Navbar() {

    const {datafetch} = useContext(DataContext);

    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        datafetch(location);
    }

    return (
        <form>
            <div className="input-group my-5">
                <input type="text" className="form-control" onChange={handleChange} placeholder="Enter Location" aria-describedby="button-addon2" value={location} />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Navbar