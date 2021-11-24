import React from 'react'
import BucketItem from './BucketItem'
// import './BucketListView.css'

function BucketList({countries}) {
    
    const bucketComponents = countries.map(country => {
            return (
                <BucketItem country={country}/>
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