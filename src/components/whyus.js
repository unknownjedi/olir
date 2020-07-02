import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import SectionIndicator from "../reusables/sectionindicator"
import WhyUsTitle from "../reusables/whyustitle"
import WhyUsImg from "../assets/images/Olir_UI-03.png"
import { WhyUsContainer } from "../styled/StyledComponents"
import Dots from "../assets/images/Olir_UI-04.png"

const WhyUs = () => {
  return (
    <WhyUsContainer id="why-us">
      <div
        className="wow bounceInRight animated logo-dark"
        data-wow-duration="1.5s"
        // data-wow-delays="0.25s"
      >
        <img className="dots" src={Dots} />
      </div>

      <SectionIndicator text="Why Us" />
      <WhyUsTitle />
      <div className="container">
        <div
          className="wow bounceInLeft animated img-placeholder"
          data-wow-duration="1.5s"
          // data-wow-delays="0.25s"
        >
          <img src={WhyUsImg} />
        </div>
        <p
          className="wow bounceInRight content animated img-placeholder"
          data-wow-duration="1.5s"
          // data-wow-delays="0.25s"
        >
          You are the heart, the brain and the hands of your company.
          <br />
          We will be the face. And the voice.
          <br />
          We put your business on the map. And it’s our job to make your brand
          be seen, heard and worshipped.
          <br />
          Simply put, we’re built for one thing and one thing only. <br />
          Revolution.
        </p>
      </div>
    </WhyUsContainer>
  )
}

export default WhyUs
