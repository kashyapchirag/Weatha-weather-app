import React from 'react'
import { useState } from 'react';
import clear_day from '../assets/clear_day.png';
import clear_night from '../assets/clear_night.png';
import few_clouds_day from '../assets/few_clouds_day.png';
import few_clouds_night from '../assets/few_clouds_night.png';
import mist_day from '../assets/mist_day.png';
import mist_night from '../assets/mist_night.png';
import clouds_day_night_both from '../assets/clouds_day_night_both.png';
import brokenclouds_day_night from '../assets/brokenclouds_day_night.png';
import showerrain_day from '../assets/showerrain_day.png';
import showerrain_night from '../assets/showerrain_night.png';
import rain_day_night from '../assets/rain_day_night.png';
import thunderstorm_day_night from '../assets/thunderstorm_day_night.png';
import snow_day_night from '../assets/snow_day_night.png';

const CurrentTemp = ({city,data,setcity,data2,setdata2,unit,setunit,fahrenheit}) => {

  const icons = {
    "01d":clear_day,
    "01n":clear_night,
    "02d":few_clouds_day,
    "02n":few_clouds_night,
    "03d":clouds_day_night_both,
    "03n":clouds_day_night_both,
    "04d":brokenclouds_day_night,
    "04n":brokenclouds_day_night,
    "09d":showerrain_day,
    "09n":showerrain_night,
    "10d":rain_day_night,
    "10n":rain_day_night,
    "11d":thunderstorm_day_night,
    "11n":thunderstorm_day_night,
    "13d":snow_day_night,
    "13n":snow_day_night,
    "50d":mist_day,
    "50n":mist_night,
  }

  

  return (
    
    
    <div className='h-[12rem] sm:h-[35%] w-[95%] rounded-4xl px-4 md:px-8 lg:px-18  flex justify-between '>

      <div className='flex w-[100%] justify-between items-center'>
          <div className="left w-[65%]">
            <span className="block cityname text-[2.9rem] md:text-[3.2rem] lg:text-[4.3rem] font-medium leading-none mb-3 relative z-1">
              {data?.name}
            </span>
            <span className="block rainchance text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] font-medium mb-3">
              Chances of rain: {Math.round((data2?.list?.[0].pop)*100)}%
            </span>

            <span className="block temperature  font-semibold ">

              {unit=="c" &&
                <>
                  <span className='text-[3.4rem] md:text-[3.2rem] lg:text-[5rem] leading-none'>{Math.round(data?.main?.temp)}</span>
                  <span  onClick={()=>setunit("F")} className='cursor-pointer text-[2rem] md:text-[2.6rem] lg:text-[3rem] relative
                  p-0 md:p-0 lg:p-1 bottom-5 md:bottom-4 lg:bottom-9'>°{unit}</span>
                </>
              }{unit=="F" &&
                
                <>
                  <span className="text-[3.4rem] md:text-[3.2rem] lg:text-[5rem] leading-none">
                    {fahrenheit}
                  </span>
                  <span  onClick={()=>setunit("c")} className='cursor-pointer text-[2rem] md:text-[2.6rem] lg:text-[3rem] relative
                  p-0 md:p-0 lg:p-1 bottom-5 md:bottom-4 lg:bottom-9'>°{unit}</span>
                </>
              }
              
            </span>
          </div>

          <div className='w-[35%] md:w-[30%] lg:w-[30%] flex justify-center items-center'>
            <img className='w-full' src={icons[data?.weather?.[0].icon] } alt="weather_image" />
          </div>
      </div>
      
      

    </div>
  )
}

export default CurrentTemp
