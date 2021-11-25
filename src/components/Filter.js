import React, { useEffect } from 'react'

const Filter = () => {

    // const filterByRegion = async (region) => {
    //     const result = await fetch (`https://restcountries.com/v3.1/all/region/${region}`)
    //     const data = await result.json()
    //     setCountries(data)
    // }

    // useEffect(() => {
    //     filterByRegion()
    // }, [])

    return (
        <section className="filter">
            {/* <form className="search">
                <input type="search" name="search" id="search" placeholder=""/>
            </form> */}

             {/* const handleFilterChange = (e) => {
                setFilter(e.target.value); 
             }
             */}

             {/* onChange={(e) => filterByRegion(e.target.value)} value={regions.name} */}
            
            <div>
            <select name="select" id="select" className="select">
                    <option value = "Filter by Region">Filter by Region</option>
                    <option value = "Africa">Africa</option>
                    <option value = "America">America</option>
                    <option value = "Asia">Asia</option>
                    <option value = "Europe">Europe</option>
                    <option value = "Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Filter
