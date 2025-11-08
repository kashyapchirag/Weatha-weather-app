import React from 'react'
import Header  from './Header'
import CurrentTemp from './CurrentTemp'
import Hourly from './Hourly'
import Airconditions from './Airconditions'

const Middle = ({city,data,data2,setcity,currentweather,setdata,setdata2,hourlyweather ,lat,setlat,lon,setlon,data3,setdata3,airquality,data4,setdata4,daysweather, unit,setunit,fahrenheit}) => {
  return (
    <div className='w-[100%] sm:w-[63%] h-[100%] flex flex-col  items-center gap-3.5'>
      <Header city={city} data={data} data2={data2} setcity={setcity} setdata={setdata} setdata2={setdata2} currentweather={currentweather} hourlyweather={hourlyweather} lat={lat} lon={lon} setlat={setlat} setlon={setlon} setdata3={setdata3} data3 ={data3} airquality={airquality} setdata4={setdata4} data4 ={data4} daysweather={daysweather}/>
      
      <CurrentTemp city={city} data={data} data2={data2} setcity={setcity} setdata={setdata} setdata2={setdata2} currentweather={currentweather} hourlyweather={hourlyweather} unit={unit} setunit ={setunit} fahrenheit={fahrenheit} />
      
      <Hourly city={city} data={data} data2={data2} setcity={setcity} setdata={setdata} setdata2={setdata2} currentweather={currentweather} hourlyweather={hourlyweather} unit={unit} setunit ={setunit} fahrenheit={fahrenheit} />
      
      <Airconditions city={city} data={data} data2={data2} setcity={setcity} setdata={setdata} setdata2={setdata2} currentweather={currentweather} hourlyweather={hourlyweather} lat={lat} lon={lon} setlat={setlat} setlon={setlon} setdata3={setdata3} data3 ={data3} airquality={airquality} unit={unit} setunit ={setunit} fahrenheit={fahrenheit}/>
    </div>
  )
}

export default Middle
