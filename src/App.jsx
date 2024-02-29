import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Media from "./Components/Media";
import News from "./Components/News";
import Purchase from "./Components/Purchase";
import SocialMedia from "./Components/SocialMedia";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HomeText from "./Components/HomeText";
import Particlesbkg from "./Components/Particlesbkg";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <div className="w-full m-0 no-scrollbar">
      <Particlesbkg id="particles" />
      <Header  />
      {windowWidth >= 1024 ? (
        <Parallax pages={5.2} style={{ top: "1rem", left: "0" }}>
          <ParallaxLayer offset={0} speed={0.8}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={2}>
            <HomeText/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.1}>
            <About/>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.8}>
            <Media />
          </ParallaxLayer>
          <ParallaxLayer offset={1.99} speed={1.6}>
            <News />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8}>
            <Purchase />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.2}>
            <SocialMedia />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={1}>
            <ContactUs />
          </ParallaxLayer>
          <ParallaxLayer offset={4.8} speed={0.3}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      ) : (
        <>
          <Home />
          <HomeText/>
          <About />
          <Media />
          <News />
          <Purchase />
          <SocialMedia />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
