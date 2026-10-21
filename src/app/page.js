"use client";

import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesVisualMatrix from "../components/ServicesVisualMatrix";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import CuriousMindHero from "../components/CuriousMindHero";
import AboutUs from "../components/AboutUS";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import EnterpriseSolutions from "@/components/SolutionsSection";
import CaseStudies from "@/components/CaseStudiesSection";
import HowWeWork from "@/components/HowWeWork";
import TrustStats from "@/components/TrustStats";


export default function Home() {
  return (
    <main className="relative min-h-screen text-[#282126] selection:bg-[#B8A6C9] selection:text-[#282126]">
      {/* Background Interactive Kinetic Canvas with mouse particle reactions */}
      {/* <InteractiveCanvas /> */}

      {/* Optional overlay */}
      <div className="fixed inset-0 bg-[#F7F3EC]/60 -z-10" />

      {/* Smooth Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Top Left Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      <TrustStats />


      <AboutUs />
      {/* {Service} */}
      <ServicesVisualMatrix />
      <EnterpriseSolutions />
      {/* Visual Work Reel & Proof of Scale */}
      <WhyChooseUs />
      <CaseStudies />
      <CuriousMindHero />
      <HowWeWork />

      {/* Modern Tech Stack & Modular Architecture Visualizer */}
      {/* <TechStackVisualizer /> */}

      {/* Interactive Scope & Project Configurator */}
      {/* <InteractiveProjectEstimator /> */}

      <Testimonials />
      <Blogs />
      <Footer />
      
    </main>
  );
}
