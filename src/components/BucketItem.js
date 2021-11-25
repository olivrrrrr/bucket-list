import React from 'react'
import './BucketItem.css'
import {useState} from 'react'

const BucketItem = ({country, onCountryVisited}) => {
    
    // Countries we want to show 
   // const bucketListCountry = country.filter(country => (country.name.common === "Afghanistan" || country.name.common === "Sri Lanka" || country.name.common === "Senegal" || country.name.common === "Jamaica"|| country.name.common === "Nepal" || country.name.common === "Cameroon"  || country.name.common === "United Kingdom"  ))

    // // Country Name
    // const bucketListCountryName = bucketListCountry.map(country => country.name.common)

    // // Capital Name
    // const bucketListCapital = bucketListCountry.map(country => country.capital)

    // // Capital Name
    // const bucketListCountryCurrency = bucketListCountry.map(country => country.flag)
    
    const [isChecked, setIsChecked] = useState(false); 

    const handleOnChange = () => {
        setIsChecked(!isChecked); 
    }

    return (
        <section className="bucket-list-container">
        <div className = {country.visited ? "country visited" : "country"} >
            <div className="bucket-list">

               {/* <p> {country.flag}</p>  */}
               

               <div className="details">
                    <img src = {country.flags.svg} alt={country.name}/>
                    <h3>{country.name.common}</h3>
                    <h4> Region: <span>{country.region}</span></h4>
                    <h4> Capital: <span>{country.capital}</span></h4>
                    <input type="checkbox" checked={isChecked}/>
                    <div>
                     <button onClick={() => handleOnChange()} className="button" role="button">Visited</button>
                    </div>

                    
               </div>
               {/* <h4>Visited?</h4>
               <p>{country.visited ? "Yes" : "No" }</p> */}
               {/* <button onClick={() => onCountryVisited(country.id)}>Visited</button> */}
            </div>

            

        </div>
        </section>

      
        // <div className = {country.visited ? "country visited" : "country"}>
        //        <img src = {country.flags.svg} alt={country.name}/>
        //        {/* <p> {country.flag}</p>  */}
        //        <p><span>{country.name.common}</span></p>
        //        <p> Region: <span>{country.region}</span></p>
        //        <p> Capital: <span>{country.capital}</span></p>
              
        //        {/* <h4>Visited?</h4>
        //        <p>{country.visited ? "Yes" : "No" }</p> */}
        //        {/* <hr/> */}
           
        //        {/* <button onClick={() => onCountryVisited(country.id)}>Visited</button> */}
               
        //        <button onClick={() => onCountryVisited(country.id)} className="button" role="button">Visited</button>
        // </div>
    
    
    )
}

export default BucketItem
