import React from 'react'
import BucketItem from './BucketItem'
// import './BucketListView.css'

const BucketList = ({countries, onCountryVisited}) => {
    
    const bucketComponents = countries
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