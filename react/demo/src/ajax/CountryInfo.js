import React, { useState } from 'react'
import $ from 'jquery'

export default function CountryInfo() {
    let [country, setCountry] = useState(null)

    function getInfo() {
        let code = document.getElementById("txtCode").value;
        let URL = `https://restcountries.com/v3.1/alpha/${code}`;
        $.ajax(
                {
                    url : URL,
                    method : 'get',
                    success: 
                     (data) => {
                         setCountry(data[0]) // take first element in array
                     },
                    error: 
                      (error) => { 
                        setCountry(null); 
                        alert("Sorry! No country found!")
                      }
                 }
        )
    }

    return (
        <>
            <h2>Country Information</h2>
            Country Code :  <input type="text" id="txtCode" />
            <button onClick={getInfo}>Get Info</button>
            <p></p>

            {country &&
                <div className="row">
                    <div className="col-sm-6">
                        {country.name.common}
                        <p></p>
                        {country.capital[0]}
                        <p></p>
                        {country.population}
                    </div>
                    <div className="col-sm-6">
                        <img src={country.flags.png} alt="No Flag"
                             style={{width:'200px', height:'150px'}} />
                    </div>
                </div>
            }
        </>
    )
}
