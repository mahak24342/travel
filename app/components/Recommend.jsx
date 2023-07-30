"use client"

import React, { useState } from "react";
import "@/app/components/fuckk.css"

export default function Recommend() {
  const data = [
    {
      image: "Destination1.png",
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: "Destination2.png",
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: "Destination3.png",
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: "Destination4.png",
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: "Destination5.png",
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: "Destination6.png",
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <div id="recommend">
      <div className="fuck">
        <h2>Recommended Destinations</h2>
        
      </div>
      <div className="packages">
        <ul id="dd">
          {packages.map((pkg, index) => {
            return (
              <li 
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="destinations">
{
    data.map((destination)=>{
        return(
<div className="destination">
    <img  className="kl" src={destination.image}/>
    <h3>{destination.title}</h3>
    <p>{destination.subTitle}</p>
<div className="info">
    <div className="services">
        <img src="info1.png"/>
        <img src="info2.png"/>
        <img src="info3.png"/>
    </div>
    <h4>{destination.cost}</h4>

</div>
<div className="distance">
    <span>1000 Kms</span>
<span>{destination.duration}</span>
</div>
</div>

        )
    })
}
      </div>
      
      </div>
  )}
