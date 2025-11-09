import React from 'react'
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


const Hourly = ({city,data,data2,setcity,currentweather,setdata,setdata2,hourlyweather,unit,setunit,fahrenheit}) => {
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

    <div className='h-auto sm:h-[20%] md:h-[25%] lg:h-[30%] w-[95%] px-4 py-3 md:p-4 lg:p-5 bg-[#222d40]/60 rounded-4xl hover:h-[31%] hover:w-[96%]  bg-[#222d40]/70 backdrop-blur-md border border-white/10'>

      <div className="text-[#CBD5E1] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold ">
        HOURLY FORECAST
      </div>

      <div className="cont flex flex-nowrap justify-start items-center gap-5 w-full h-[80%] overflow-x-scroll overflow-y-hidden scroll-smooth ">

        
        {data2?.list?.slice(0,12).map((item)=>{
          const utcTime = item.dt_txt + "Z";
          const localTime = new Date(utcTime).toLocaleString("en-IN", {
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          return(
            
            <div key={item.dt} className="card flex-shrink-0 w-[15%] h-[100%] hover:w-[16%] hover:h-[100%] flex flex-col justify-center items-center gap-2">

              <div className='text-[#CBD5E1] text-[0.8rem] md:text-[1rem] font-medium'>{localTime.slice(5,)}</div>
              <div className='text-[#CBD5E1] font-medium w-[70%] md:w-[70%] lg:w-[50%]'>
                <img className='w-full' src={icons[item?.weather?.[0].icon] } alt="dadad" />
              </div>
              <div className='lg:pt-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium'>
                {unit=="c" &&
                  <>
                    {Math.round(item?.main?.temp)}
                    <span className='sm:hidden'>°</span>
                  </>
                }
                {unit=="F" &&
                  <>
                    {Math.round((item?.main?.temp * 9) / 5 + 32)}
                    <span className='sm:hidden'>°</span>
                  </>
                }
                <span className='hidden sm:inline cursor-pointer text-[1rem] relative md:px-0 lg:px-1 bottom-1'>°{unit}</span>

              </div>

            </div>
          )
        })}
        
        
        
      </div>


    </div>
  )
}

export default Hourly
