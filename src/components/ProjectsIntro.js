import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import { Link } from "gatsby"
import LogoIcon from "../assets/images/logo-small-white.png"
import WhyUsImg from "../assets/images/Olir_UI-03.png"
import { css } from "@emotion/core"

const ServicesIntroContainer = styled.div`
  /* height: 375px; */
  width: 100%;

  background-color: ${cssVariables.$color_primary_black_1};
  /* background-color: red; */
  background-image: url(${WhyUsImg});
  padding: 30px;
  background-size: 70%;
  background-position: 60vw bottom;
  background-repeat: no-repeat;
  padding: 30px;
  .content {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    a {
      width: 50px;
      img {
        max-width: 50px;
        height: auto;
      }
    }
    .intro-graphic {
      text-align: right;
      height: 25vh;
      img {
        max-height: 375px;
        width: auto;
        margin: 15px auto;
        @media (max-width: 445px) {
          max-width: 100%;
          height: auto;
          max-height: unset;
          width: unset;
        }
      }
    }
    .service-label {
      color: ${cssVariables.$color_primary_white};
      font-family: ${cssVariables.$josefin};
      font-size: 24px;
      letter-spacing: 2px;
    }
  }
`

const ProjectsIntro = () => (
  <ServicesIntroContainer
    className="wow bounceInDown animated"
    data-wow-duration="1.5s"
    // data-wow-delays="0.25s"
  >
    <div className="content">
      <Link to="/">
        <img src={LogoIcon} />
      </Link>
      <div className="intro-graphic">{/* <img src={WhyUsImg} /> */}</div>
      <div className="service-label">LATEST PROJECTS</div>
    </div>
  </ServicesIntroContainer>
)

export default ProjectsIntro
