import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import SectionIndicator from "../reusables/sectionindicator"
import ServicesList from "../content/services"
import { Link } from "gatsby"
import { ServicesContainer } from "../styled/StyledComponents"
import Dots from "../assets/images/Olir_UI-04.png"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <SectionIndicator text="Services" />
      <div className="container">
        {ServicesList.map((service, index) => (
          <Link
            key={index}
            className="service-container wow bounceInLeft animated img-placeholder"
            data-wow-duration="1.5s"
            // data-wow-delays="0.25s"
            to={`/${service.slug}`}
          >
            <div className="img-placeholder">
              <img src={service.image} />
            </div>
            <div className="title">{service.title}</div>
          </Link>
        ))}
      </div>
      <div
        className="service-container wow bounceInRight animated dots"
        data-wow-duration="1.5s"
        // data-wow-delays="0.25s"
      >
        <img src={Dots} />
      </div>
    </ServicesContainer>
  )
}

export default Services
