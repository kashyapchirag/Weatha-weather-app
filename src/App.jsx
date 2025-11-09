import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Middle from './components/Middle'
import Dayforecast from './components/Dayforecast'
import bg from './assets/bg.jpg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Weatherpage from './components/Weatherpage'
import Aqipage from './components/Aqipage'
import Layout from './components/Layout'

function App() {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path:"/Weatha",element:<Weatherpage/>},
        {path:"/map",element:<Aqipage/>},

      ]
    }
  ])

  
  return (

    <RouterProvider router={router}/>

  )
}

export default App
