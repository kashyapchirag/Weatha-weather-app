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


  
const Dayforecast = ({data4,setdata4,dayweather,unit,setunit,fahrenheit}) => {

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
    <div className='hidden sm:block w-[31.5%] h-[100%] p-9 bg-[#222d40]/60 rounded-4xl hover:h-[101%] hover:w-[33%] bg-[#222d40]/70 backdrop-blur-md border border-white/10'>
      <div className='text-[1.4rem] font-semibold h-[5%]'>
        <span className='text-[#CBD5E1] mr-8 '>7-DAY FORECAST</span>

      </div>

      <div className='h-[95%] flex flex-col justify-center items-center gap-8'>

        {data4?.list?.map((item,index)=>{
          const timestamp = item.dt;       // e.g., 1762410600
          const date = new Date(timestamp * 1000); // multiply by 1000 because JS uses milliseconds
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); 

          
          return(
            <div key={item.dt} className='flex justify-center items-center'>
              <div className='card h-[11%] flex justify-between items-center  '>
                <div className='day w-[2rem] flex items-center justify-items-start text-[1.2rem] text-[#CBD5E1]'>
                  {index==0 && <span>Today</span>}
                  {index!=0 && <span>{dayName.slice(0,3)}</span>}
                  
                </div>
                

                <div className='text-[1.2rem] font-medium flex items-center justify-center gap-4'>
                  <img className='w-[20%] flex justify-center' src={icons[item?.weather?.[0].icon]} alt="" />
                  {item?.weather?.[0].main}
                </div>
                <div className="temp">
                    {unit=="c" &&
                      <>
                        <span className='font-medium text-[1.2rem] '>{Math.round(item?.temp?.max)}°</span>
                        
                        <span className='text-[#CBD5E1] text-[1.2rem] '>/{Math.round(item?.temp?.min)}°</span> 
                      </>
                    }
                    {unit=="F" &&
                      <>
                        {/* {Math.round((item?.main?.temp * 9) / 5 + 32)} */}
                        <span className='font-medium text-[1.2rem] '>{Math.round((item?.temp?.max*9) / 5+32)}°</span>
                        <span className='text-[#CBD5E1] text-[1.2rem] '>/{Math.round((item?.temp?.min)*9 / 5 +32)}°</span> 
                      </>
                    }
                    {/* <span className='font-medium text-[1.2rem] '>{Math.round(item?.temp?.max)}°</span> */}

                    {/* <span className='text-[#CBD5E1] text-[1.2rem] '>/{Math.round(item?.temp?.min)}°</span>  */}

                </div>

              </div>

              
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Dayforecast
