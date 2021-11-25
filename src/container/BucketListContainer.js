import React from 'react'; 
import BucketListViewer from '../components/BucketList';
import {useState, useEffect} from 'react';
import './BucketListContainer.css'

const BucketListContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("");  

    const handleFilterChange = (e) => {
        setFilter(e.target.value); 
    }

    const search = (countries) => {
        return countries.filter((country) => country.name.common.toLowerCase().indexOf(filter) > -1); 
    }

    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(resp=>resp.json())
        .then(data => setCountries(data))
    }

    const updateCountryVisited = (id) => {
        console.log("updating country" + id);
        const countryToUpdate = countries[id-1];
        // countryToUpdate.completed = true;

        //countryToUpdate.visited = true;


        // fetch(`https://restcountries.com/v3.1/all/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(countryToUpdate)
        // })
        //     .then(getCountryData);
    }

    useEffect(getCountryData, []);

    return (
        countries.length > 0  ? 
       
       <div className="bucket-list-viewer">
            <form>
                <input type="text" value={filter} onChange={handleFilterChange}/>
            </form>
            <BucketListViewer countries={search(countries)} onCountryVisited={updateCountryVisited}/>
        </div>
        : 
        <p>...Loading</p>
    )
}

export default BucketListContainer
