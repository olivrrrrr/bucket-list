import React from 'react'; 
import BucketListViewer from '../components/BucketList';
import {useState, useEffect} from 'react';

const BucketListContainer = () => {
    
    const [countries, setCountries] = useState([])
    
    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(resp=>resp.json())
        .then(data => setCountries(data))
    }

    const updateCountryVisited = (id) => {
        console.log("updating country" + id);
        const countryToUpdate = countries[id-1];
        // countryToUpdate.completed = true;

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
        <div>
            <BucketListViewer countries={countries} onCountryVisited={updateCountryVisited}/>
        </div>
        : 
        <p>...Loading</p>
    )
}

export default BucketListContainer
