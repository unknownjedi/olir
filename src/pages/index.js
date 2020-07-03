import React from "react"
import Layout from "../components/layout"
import Landing from "../components/landing"
import "../assets/scss/app.scss"
import WhyUs from "../components/whyus"
import Services from "../components/services"
import Clients from "../components/clients"
import Footer from "../components/footer"
import SectionsContainer from "../components/sections_container"
import LogoDark from "../assets/images/Olir_UI-07.png"
import Sticky from "react-stickynode"


import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

import { css } from "@emotion/core"
import OurWorks from "../components/ourworks"


export default () => {
  const fullPageOptions = {
    // for mouse/wheel events

    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 3,
  
    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 7,
    scrollSpeed: 350,
    hideScrollBars: true,
    enableArrowKeys: true
  };
  const slides = [
    <Slide> <Landing /> </Slide>,
    <Slide><Sticky enabled={true} top={30}>
    <div className="logo-dark">
      <a href="/">
        <img className="logo-dark" src={LogoDark} />
      </a>
    </div>
  </Sticky> <WhyUs /> </Slide>,
    <Slide><Services /> </Slide>,
    <Slide> <Clients /> </Slide>,
    <Slide> <OurWorks /> </Slide>,
    <Slide><Footer /></Slide>
  ];
  fullPageOptions.slides = slides;
  return (
    
    <Layout>
      <Fullpage {...fullPageOptions} />
    </Layout>
  )
}
