import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"

const StyledSectionTitle = styled.h2`
  font-family: ${cssVariables.$josefin};
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 1.4;
  span {
    font-weight: 400;
  }
`

const WhyUsTitle = () => {
  return (
    <StyledSectionTitle
      className="wow bounceInLeft animated"
      data-wow-duration="1.5s"
      // data-wow-delays="0.25s"
    >
      A <span>Digital First</span> Marketing Agency
    </StyledSectionTitle>
  )
}

export default WhyUsTitle
