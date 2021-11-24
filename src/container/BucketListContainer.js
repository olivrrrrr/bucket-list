import React from 'react'; 
import BucketListViewer from '../components/BucketListViewer';
import {useState, useEffect} from 'react';

function BucketListContainer() {
    
    const [countries, setCountries] = useState([])
    
    // useEffect(()=>{
    //     fetch("https://restcountries.com/v3.1/all")
    //     .then(resp=>resp.json())
    //     .then(data=>{
    //     setCountries(data)
    //     console.log(data)});
    // }, [])

    
    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(resp=>resp.json())
        .then(data => setCountries(data))
    }

   

    useEffect(getCountryData, []);

    return (

        countries  ? 

        <div>
            {/* <BucketListViewer countries={countries}/> */}
            {countries.map(country =>{ return ( <li>{country.name}</li>)})}
        </div>

        : 

        <p>...Loading</p>
    )
}

export default BucketListContainer
