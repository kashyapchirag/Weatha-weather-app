import React from 'react'
import umbrella from '../assets/umbrella.webp';
import { NavLink } from 'react-router-dom';
import map from '../assets/map.svg';
import weather_home from '../assets/weather_home.svg';



const Sidebar = () => {
  return (

    <div className='hidden sm:flex w-[5.5%] h-[100%] flex flex-col gap-7 py-[0.9rem] rounded-4xl flex flex-col items-center bg-[#222d40]/70 backdrop-blur-md border border-white/10 text-[#CBD5E1]'>
        
        <div className="umbrella mb-[2rem]">
          <img className='w-[2.5rem]' src={umbrella} alt="umbrella logo" />
        </div>
        
      
        <NavLink to="/Weatha">
          <div className="weatherhome flex flex-col justify-center items-center md:gap-1 lg:gap-2">
            
            <img className='w-[1.5rem] hover:fill-white' src={weather_home} alt="weather logo" />
            <span className='md:text-[0.5rem] lg:text-[0.7rem] hover:text-white'>Weather</span>
          </div>
        </NavLink>

        <NavLink to="/map">
          <div className="umbrella flex flex-col justify-center items-center md:gap-1 lg:gap-2">
            
            <img className='w-[1.5rem]' src={map} alt="umbrella logo" />
            <span className='md:text-[0.5rem] lg:text-[0.7rem] hover:text-white'>Map</span>
          </div>
        </NavLink>

    </div>
  )
}
export default Sidebar
