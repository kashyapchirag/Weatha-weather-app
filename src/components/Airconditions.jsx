import React from 'react'
import aqiimage from "../assets/aqi.png"
import wind from "../assets/wind.png"
import temperature from "../assets/temperature.png"
import humidity from "../assets/humidity.png"


const Airconditions = ({data,data2,lat,setlat,lon,setlon,data3,setdata3,airquality,unit,setunit,fahrenheit}) => {

  const aqiobject ={
    1:"Good",
    2:"Fair",
    3:"Moderate",
    4:"Poor",
    5:"Terrible"
  }
  const colorMap = {
  1: "#22c55e", // green-400
  2: "#facc15", // yellow-400
  3: "#fb923c", // orange-400
  4: "#ef4444", // red-500
  5: "#a855f7", // purple-500
}


  return (
    <div className='h-auto sm:h-[18%] md:h-[25%] w-[95%] px-4 py-3 md:p-4 lg:p-5 bg-[#222d40]/60 rounded-4xl hover:h-[29%] hover:w-[96%] hover:bg-[#222d40]/70 bg-[#222d40]/70 backdrop-blur-md border border-white/10 flex flex-col lg:gap-3'>
      
      <div className="heading text-[#CBD5E1] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold ">AIR CONDITIONS</div>

      <div className="box h-[78%] lg:px-[2rem] flex justify-around items-center gap-2 sm:gap-2 md:gap-5 lg:gap-18 overflow-x-scroll overflow-y-hidden scroll-smooth" >

                <div className="card w-[20rem] flex flex-col justify-center items-center">
                  <img className='w-[2rem] md:w-[4rem] sm:w-[3rem]' src={temperature} alt="temperature_image" />

                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-[0.8rem] md:text-[1rem] text-[#CBD5E1]'>Real Feel</span>
                    <div className="aqi text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium flex justify-center items-center">


                      {unit=="c" &&
                        <>
                          {(data?.main?.feels_like)}
                          <span className='md:hidden'>°</span>
                        </>
                      }
                      {unit=="F" &&
                        <>
                          {((data?.main?.feels_like*9)/5+32).toFixed(2)}
                          <span className='md:hidden'>°</span>
                        </>
                      }
                      <span className='hidden md:inline cursor-pointer text-[1rem] relative px-1 bottom-1'>°{unit}</span>
                      
                    </div>

                  </div>

                </div>
                <div className="card w-[20rem] flex flex-col justify-center items-center">
                  <img className='w-[2rem] md:w-[4rem] sm:w-[3rem]' src={aqiimage} alt="aqi_image" />

                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-[0.8rem] md:text-[1rem] text-[#CBD5E1]'>AQI</span>
                    <div className="aqi text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium flex justify-center items-center" style={{color:colorMap[data3?.list?.[0].main?.aqi]}}>
                      {aqiobject[data3?.list?.[0].main?.aqi]}
                    </div>

                  </div>

                </div>
                <div className="card w-[20rem] flex flex-col justify-center items-center">
                  <img className='w-[2rem] md:w-[4rem] sm:w-[3rem]' src={wind} alt="wind_image" />
                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-[0.8rem] md:text-[1rem] text-[#CBD5E1]'>Wind</span>

                    <div className="aqi text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium flex justify-center items-center">
                      {unit=="c" &&
                        <>
                          {(data?.wind?.speed * 3.6).toFixed(1)}
                          <span  className='cursor-pointer text-[1rem] md:text-[1rem] lg:text-[1.2rem] px-1 '>km/h</span>
                        </>
                      }
                      {unit=="F" &&
                        <>
                          {(((data?.wind?.speed * 3.6).toFixed(1))*0.621371).toFixed(1)}
                          <span  className='cursor-pointer text-[1rem] md:text-[1rem] lg:text-[1.2rem] px-1 '>miles/h</span>
                        </>
                      }

                    </div>

                  </div>

                </div>
                <div className="card w-[20rem] flex flex-col justify-center items-center">
                  <img className='w-[2rem] md:w-[4rem] sm:w-[3rem]' src={humidity} alt="humidity_image" />
                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-[0.8rem] md:text-[1rem] text-[#CBD5E1]'>Humidity</span>

                    <div className="aqi text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium flex justify-center items-center">
                      {data?.main?.humidity}%
                    </div>

                  </div>



                </div>
      </div>

    </div>
  )
}

export default Airconditions
