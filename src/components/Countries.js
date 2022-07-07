import React, { useEffect,useState } from "react";
import axios from "axios"
import Card from "./Card"

const Countries = () =>{

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("")
    const radios = ["Africa","America","Asia","Europe","Oceania"];

    // Use effect quand le composer est monter l appel se fait ? 
    useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
        setData(res.data)
    });
    },[])

return(
<div className="countries">
    <h1>Les pays</h1>
    <ul className="radio-container">
    <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
    {radios.map((continent) => (
        <li>  <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e)=>setSelectedRadio(e.target.id)}/><label>{continent}</label></li>
    ))}
  
    </ul>
    {selectedRadio && (
        <button onClick={()=>setSelectedRadio("")}>Annnuler la recherche</button>
    )}
    <ul>
        {data
        
        .filter((country) => country.continents[0].includes(selectedRadio))
        .sort((a,b)=>b.population - a.population)
        .slice(0,rangeValue)
        .map((country, index)=><Card key={index} country={country}/>)}
    </ul>
</div>
)
}

export default Countries;
 
