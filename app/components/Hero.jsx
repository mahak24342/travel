import React from 'react'
import "@/app/components/hero.css"
const Hero = () => {
  return (
    <section id="hero">
        <div className='background'>
            <img src="./hero.png" alt=""/>
            
        </div>
        <div className='content'>
            <div className='title' id="kl">
                <h1 id="pl">
                    TRAVEL TO EXPLORE
                </h1>
<p className='pk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod iste delectus possimus? Consequuntur cupiditate aperiam recusandae at quae natus, placeat doloribus id ea quo ducimus nobis omnis nemo sapiente mollitia ex esse atque quia enim tenetur doloremque quam fuga reiciendis eum. 
Ad deleniti eligendi delectus! Accusamus culpa repudiandae hic.</p>
            </div>
            <div className='search'>
                <div className='container'>
                    <label htmlFor="">Where To Go</label>
                    <input type="text" placeholder="Search Your Location"/>
                </div>
                <div className='container'>
                    <label htmlFor="">Check In</label>
                    <input type="date" />
                </div>
                <div className='container'>
                    <label htmlFor="">Check Out </label>
                    <input type="date"/>
                </div>
                <button id="bt">
                    Explore Now
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero