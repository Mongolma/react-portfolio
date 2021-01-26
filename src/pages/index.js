import React , { useState }from 'react'
import HeroSection from '../components/HeroSection';
import Info from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import { homeObj } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';




const Home = () => {

    const[ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
          <HeroSection />
         <Info {...homeObj} />
         <Projects />
       <Footer />
        
        </>
    );
};

export default Home
