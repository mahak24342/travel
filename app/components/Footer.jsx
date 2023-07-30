import React from 'react'
import {BsLinkedin,BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import "@/app/components/Footer.css"
const Footer = () => {
  return (
    <div className='fu'>
        <span>CopyWright &copy:2021 Traveller.All Rights Reserved</span>
   <ul className='links'>
   <li><a href='#hero'id="g1" >Home</a></li>
<li><a href='#services'id="g1" > Services</a></li>
<li><a href='#recommend' id="g1">  Places</a></li>
<li><a href='#testimonials' id="g1"> Testimonials</a></li>  
   </ul>
<ul className="social_links">
    <li>
     <AiFillInstagram />
     
    
    </li>
    <li>
    <BsLinkedin/>
    </li>
    <li>
    <BsFacebook/>  
    </li>

</ul>

   
    </div>
  )
}

export default Footer