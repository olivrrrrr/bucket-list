import React from 'react'

function BucketListViewer({countries}) {
    
    const bucketListComponents = countries.map(country => {
        return(
            country.name
        )
    })

    return (
        <div className="bucket-list">
            {bucketListComponents}
        </div>
    )
}

export default BucketListViewer
