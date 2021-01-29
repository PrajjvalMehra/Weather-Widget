import React, { useEffect, useState } from "react";
import "bulma/bulma.sass";


import axios from 'axios';
function Icon(){
    
    const [cityName, setCityName] = useState({
        city:"-",
    });
    function handleCityNameChange(event) {
        
        setCityName({ ...cityName, city: event.target.value });
    }
   
    const [cityData, setCityData] = useState({
        name:"--",
        temp:"0",
        realFeel:"0",
        conditions: "--",
        iconId:"",
        
    })
    let iconUrl = ``;
    
    
    
    const handleSubmit = (e) =>{
            
            
            axios({
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName.city}&appid=4817328ee46eb2f4312147f65d825a38`
            })
            .then((response) => {
                
               setCityData({
                   temp:Math.round(response.data.main.temp - 273.15),
                   name:response.data.name,
                   realFeel: Math.round(response.data.main.feels_like -273.5),
                   conditions:response.data.weather[0].main,
                   iconId:response.data.weather[0].icon
                });
               
                    
                    console.log(response.data.weather[0].main);

                });
              
           
        }
        iconUrl = `http://openweathermap.org/img/wn/${cityData.iconId}@4x.png`;
    
    
   
  
    return(
<div>
<form onSubmit={handleSubmit} >
        <div className="field has-addons is-small">
            <div className="control is-small">
              <input className="input is-small" type="search" placeholder="City" name="city" onChange={handleCityNameChange} ></input>
            </div>
        <div className="control">
            <input className="button is-black is-small" value="Search" type="submit" onClick={(e) => { handleSubmit(); e.preventDefault(); }}>
            
            </input>
        </div>
        </div>
    </form>    
    <div className="columns is-mobile mb-0 is-centered ">
        <div className="column is-centered is-offset-2 pt-5  pl-4">
            <figure className="image is-96x96 is-half is-centered is-offset-0 mt-0">
                <img src= {iconUrl}></img>
            </figure>
        </div>
    </div>
    <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-centered py-0">
            <h2 className="subtitle my-0">{cityData.conditions}</h2><br/>
            <h1 className="title is-4">{cityData.name}</h1>

        </div>
    </div>
    <div className="columns is-mobile is-multiline is-centered mt-6 ">
        <div className="column is-centered py-0 is-multiline p-0">
                <h1 className="title is-size-1-mobile m-0 pb-0 mb-0">{cityData.temp}&#176;C</h1><br/>
                <h2 className="subtitle is-5 my-0">Real Feel {cityData.realFeel}&#176;C</h2><br/>

        </div>
    </div>
</div>
    )
}
export default Icon;