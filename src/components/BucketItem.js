import React from 'react'
import './BucketItem.css'

const BucketItem = ({country, onCountryVisited}) => {
    
    // Countries we want to show 
   // const bucketListCountry = country.filter(country => (country.name.common === "Afghanistan" || country.name.common === "Sri Lanka" || country.name.common === "Senegal" || country.name.common === "Jamaica"|| country.name.common === "Nepal" || country.name.common === "Cameroon"  || country.name.common === "United Kingdom"  ))

    // // Country Name
    // const bucketListCountryName = bucketListCountry.map(country => country.name.common)

    // // Capital Name
    // const bucketListCapital = bucketListCountry.map(country => country.capital)

    // // Capital Name
    // const bucketListCountryCurrency = bucketListCountry.map(country => country.flag)
    
    return (
        <div className = {country.visited ? "country visited" : "country"}>
            <div className="bucket-list">
               <p> {country.name.common}</p>
               <p> {country.capital}</p>
               <p> {country.flag}</p> 
               <h4>Visited?</h4>
               <p>{country.visited ? "Yes" : "No" }</p>
               <hr/>
               <button onClick={() => onCountryVisited(country.id)}>Visited</button>
            </div>
        </div>
    )
}

export default BucketItem
