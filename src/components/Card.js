import React, { useEffect,useState } from "react";
import axios from "axios"

const Card = ({country}) =>{

console.log(country)

return(
<li className="card">
    <img src={country.flags.svg} alt=""/>
    <div className="infos">
        <h2>{country.name.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
    </div>
</li>
)
}

export default Card;
 
