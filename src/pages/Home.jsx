import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import ServicesComponent from "../components/ServicesComponent"
import Portfolio from "../components/Portfolio"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export default function Home() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [pathname])
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServicesComponent />
            <Portfolio />
            <Process />
            <Testimonials />
            <Footer />
        </>
    )
};