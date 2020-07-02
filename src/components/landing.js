import React from "react"
import Keywords from "./keywords"
import { LandingContainer } from "../styled/StyledComponents"

const Landing = () => {
  return (
    <LandingContainer id="home">
      <div className="hero-logo-container">
        <Keywords />
        <img
          className="wow fadeIn animated logo-main mobile"
          data-wow-duration="1s"
          // data-wow-delays="0.25s"
          src={require("../assets/images/olir-logo-transparent.png")}
        />
      </div>
      <Keywords />
      <div className="desktop-logo-background">
        <img
          className="wow fadeIn animated logo-main desktop"
          data-wow-duration="1s"
          // data-wow-delays="0.25s"
          src={require("../assets/images/olirmedialogo_black.png")}
        />
      </div>
    </LandingContainer>
  )
}

export default Landing
