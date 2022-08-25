import React from 'react'
import Carousel from '../Components/Carousel'
import { Homenavbar } from '../Components/HomeNavbar'

export const Homepage = () => {
  return (
    <div>
        <Homenavbar/>
        <div style={{width:"95%",margin:"auto",height:"auto",marginTop:"30px"}}>
           <h2 style={{textAlign:"center",marginTop:"10px",color:"#262626",fontSize:"46px",fontWeight:"700",marginBottom:"20px"}}>Bitrix24. Your ultimate workspace.</h2>
           <Carousel/>
        </div>
        <img src="https://i.postimg.cc/DydryWv3/Bitrix-6.png" alt="image"/>

    </div>
  )
}
