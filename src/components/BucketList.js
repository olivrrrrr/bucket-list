import React from 'react'
import BucketItem from './BucketItem'
// import './BucketListView.css'

const BucketList = ({countries, onCountryVisited}) => {
    
    const bucketComponents = countries.filter(country => (country.name.common === "Sri Lanka" || country.name.common === "Senegal" || country.name.common === "Jamaica"|| country.name.common === "Nepal" || country.name.common === "Cameroon"  || country.name.common === "United Kingdom"  ))
    .map(country => {
            return (
                <BucketItem country={country} key = {country.id} onCountryVisited={onCountryVisited}/>
            )
        })

        return (
            <div className="bucket-list">
                 {bucketComponents}
            </div>
        )

    }

export default BucketList


// Capital City 
// Currency 
// Language