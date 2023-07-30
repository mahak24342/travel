import React from 'react'
import Hero from "@/app/components/Hero"
import Navbar from '@/app/components/Navbar'
import Services from "@/app/components/Services"
import Recommend from "@/app/components/Recommend"
import Testi from "@/app/components/testimonials"
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop"
const page = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommend/>
    <Testi/>
  <Footer/>
    </div>
  )
}

export default page