import React from 'react'
import Middle from './Middle'
import Dayforecast from './Dayforecast'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import bg from '../assets/bg.jpg'

const Weatherpage = () => {

  const [city, setcity] = useState("delhi")
  const API_key = "85cc83ce4eeff9a33d8cf9c3776b0f55";
  
  const [lat, setlat] = useState()
  const [lon, setlon] = useState()

  const currentweather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const hourlyweather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;




  const [data,setdata] = useState({});
  const [data2,setdata2] = useState({});
  const [data3,setdata3] = useState({});
  const [data4,setdata4] = useState({});

  
  const airquality =`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}`;
  const daysweather = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_key}&units=metric`;


  useEffect(()=>{
    if(city.trim()!==""){

      fetch(currentweather)
      .then((response) => response.json())
      .then((data) => {
        setdata(data)
        setlat(data?.coord?.lat)
        setlon(data?.coord?.lon)
      }).catch(error => console.error("Error", error))
  
      fetch(hourlyweather)
      .then((response) => response.json())
      .then((data) => setdata2(data))
      .catch(error => console.error("Error", error))

    }
  },[])

  useEffect(() => {
        if(lat && lon){

          fetch(airquality)
          .then((response) => response.json())
          .then((data) => setdata3(data))
          .catch(error => console.error("Error", error))

          fetch(daysweather)
          .then((response) => response.json())
          .then((data) => setdata4(data))
          .catch(error => console.error("Error", error))
        }
        
      }, [lat,lon])

  if(Object.keys(data).length != 0 && Object.keys(data2).length != 0 && Object.keys(data3).length !=0){
    console.log(data);
    console.log(data2);
    console.log(data3);
    console.log(data4);
  }

  const [unit, setunit] = useState("c")
  const fahrenheit = Math.round((1.8*data?.main?.temp)+32)

  return (
    <>

        <Middle city={city} data={data} data2={data2} setcity={setcity} setdata={setdata} setdata2={setdata2} currentweather={currentweather} hourlyweather={hourlyweather} lat={lat} lon={lon} setlat={setlat} setlon={setlon} setdata3={setdata3} data3 ={data3} airquality={airquality} setdata4={setdata4} data4 ={data4} daysweather={daysweather} unit={unit} setunit ={setunit} fahrenheit={fahrenheit} />

        <Dayforecast setdata4={setdata4} data4 ={data4} daysweather={daysweather} unit={unit} setunit ={setunit} fahrenheit={fahrenheit} />

      
    </>
  )
}

export default Weatherpage
