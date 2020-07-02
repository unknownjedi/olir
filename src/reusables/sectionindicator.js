import React from "react"
import { css } from "@emotion/core"
import { cssVariables } from "../helpers/colors"

const SectionIndicator = ({ text }) => {
  return (
    <h3
      className="section-indicator wow fadeInRight animated"
      data-wow-duration="0.5s"
      // data-wow-delays="0.25s"
      css={css`
        font-family: ${cssVariables.$josefin};
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing: 2px;
        color: ${cssVariables.$color_primary_red};
        display: inline-flex;
        align-items: center;
        margin: 40px 0;
        &::after {
          content: "";
          height: 30px;
          width: 2px;
          margin-left: 35px;
          background-color: ${cssVariables.$color_primary_black_1};
          position: relative;
          bottom: 2px;
        }
      `}
    >
      {text}
    </h3>
  )
}

export default SectionIndicator
