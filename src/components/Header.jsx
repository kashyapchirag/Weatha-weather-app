import React from 'react'
import { useEffect } from 'react'

const Header = ({city,data,data2,setcity,currentweather,setdata,setdata2,hourlyweather,lat,setlat,lon,setlon,data3,setdata3,airquality,data4,setdata4,daysweather}) => {
  
  const handleSearch= (e) => {
    if(e.key=="Enter"){
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
      setcity("");
    }
  }
  useEffect(() => {
        if(lat==data?.coord?.lat && lon==data?.coord?.lon){
          fetch(airquality)
            .then((response) => response.json())
            .then((data) => setdata3(data))
            .catch(error => console.error("Error", error))

          fetch(daysweather)
            .then((response) => response.json())
            .then((data) => setdata4(data))
            .catch(error => console.error("Error", error))

        }
      },[lat,lon])

  const handleClick = () => {
      setcity("");  
  }
  

  return (
    <div className='bg-[#222d40]/60 w-[95%] h-[3rem] rounded-4xl  bg-[#222d40]/70 backdrop-blur-md border border-white/10'>
      <input onClick={handleClick} onKeyDown={handleSearch} onChange={(e)=>{
        setcity(e.target.value)
        
      }} className='flex justify-center items-center h-[100%] w-[100%] px-[1.3rem] rounded-4xl' type="text" placeholder='Search for cities' id='search' value={city} />
    </div>
  )
}

export default Header
