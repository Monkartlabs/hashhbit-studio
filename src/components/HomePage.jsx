import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import TrustStats from './TrustStats'
import AboutUs from './AboutUS'
import ServicesVisualMatrix from './ServicesVisualMatrix'
import EnterpriseSolutions from './SolutionsSection'
import HowWeWork from './HowWeWork'
import CaseStudies from './CaseStudiesSection'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import CuriousMindHero from './CuriousMindHero'
import Blogs from './Blogs'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <TrustStats />
    <AboutUs />
    <ServicesVisualMatrix />
    <EnterpriseSolutions />
    <HowWeWork />
    <CaseStudies />
    <WhyChooseUs />
    {/* <Testimonials /> */}
    <CuriousMindHero />
    <Blogs />
    <Footer />
    </>
  )
}

export default HomePage