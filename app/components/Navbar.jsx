import React from 'react'
import "@/app/components/Navbar.css"
const Navbar = () => {
  return (
    
    <div className='brand'>
< div className='wk'>
<img src="./tl.jpg" height={50} width={50}/>
<h2 className='txt'>Traveller</h2>
</div>
<ul className='dubai'>
<li><a href='#hero' className='dubai'>Home</a></li>
<li><a href='#services' className='dubai'> Services</a></li>
<li><a href='#recommend' className='dubai'>  Places</a></li>
<li><a href='#Testi' className='dubai'> Testimonials</a></li>
</ul>
<button className='button'>
  Connect
</button>
    </div>
    
  )
}

export default Navbar