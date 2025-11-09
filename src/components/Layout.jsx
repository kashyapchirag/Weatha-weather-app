import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import bg from '../assets/bg.jpg'
import Footer from "./Footer";
import Aqipage from "./Aqipage"

const Layout = () => {
    return (
        <div>
            
            <div className="flex justify-center items-start sm:items-center h-screen bg-[#0B1120]">
                
                <div className="Container p-[0.8rem] md:p-[1.4rem] h-auto sm:h-[100%] w-[100vw] lg:h-[98vh] lg:w-[98vw] bg-[#0B1120] bg-contain text-[white] lg:rounded-4xl shadow-md border border-gray-800 "
                style={{ backgroundImage: `url(${bg})` }}>

                    <div className="h-[100%] w-[100%] flex justify-center items-start">

                        <Sidebar />

                        <Outlet/>
                    </div>
                    <Aqipage />

                    
                </div>
                
            </div>
            <div className="hidden sm:block">
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
