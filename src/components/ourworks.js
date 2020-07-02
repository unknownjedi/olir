import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import SectionIndicator from "../reusables/sectionindicator"
import { OurWorksContainer } from "../styled/StyledComponents"
import Slider from "react-slick"
import { Link } from "gatsby"

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <OurWorksContainer id="ourworks">
      <SectionIndicator text="Latest Projects" />
      <div className="our-works-content">
        <Slider className="desktop" {...settings}>
          {new Array(3).fill("test").map((work, index) => (
            <div key={index} className="center">
              <div className="works-slide-container">
                {new Array(3).fill("test").map((w, i) => (
                  <div key={i} className="project-card">
                    <Link to="/latest-projects">
                      <div className="project-content">
                        <span>
                          <span>Project</span>
                          <span className="number">{i + 1}</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="mobile" {...settings}>
          {new Array(3).fill("test").map((work, index) => (
            <div key={index} className="center">
              <div className="works-slide-container">
                <div className="project-card">
                  <div className="project-content">
                    <span>
                      <span>Project</span>
                      <span className="number">{index + 1}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </OurWorksContainer>
  )
}

export default OurWorks
