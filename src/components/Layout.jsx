import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import bg from '../assets/bg.jpg'

const Layout = () => {
    return (
        <div>
            
            <div className="flex justify-center items-center h-screen">
                
                <div className="Container p-[0.8rem] md:p-[1.4rem] h-[100vh] w-[100vw] lg:h-[98vh] lg:w-[98vw] bg-[#0B1120] bg-cover text-[white] lg:rounded-4xl shadow-md border border-gray-800 flex justify-center items-center"
                style={{ backgroundImage: `url(${bg})` }}>
                    <Sidebar />

                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
