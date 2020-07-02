import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"

import { keywords } from "../content/keywords"
import { KeywordsContainer } from "../styled/StyledComponents"

import $ from 'jquery'

const fontStyles = ["light", "bold", ""]

function Box(){
  if(mouseOver()){
    return <div id="box1" class="hoverBox" />
  }else{
    return <div id="box" class="hoverBox"/>
  }
}

function mouseOver(){
  var isMouseOver=true;
  $('img').mouseover(function(){
    isMouseOver=!isMouseOver;
  })
  return isMouseOver;
}

const Keywords = () => {
  return (
    <KeywordsContainer
      className="keywords-container"
      // data-wow-duration="1s"
      // data-wow-delays="0.25s"
    >
      <>
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className={`keyword ${Math.random() >= 0.5 ? "italic" : ""} ${
              fontStyles[Math.floor(Math.random() * fontStyles.length)]
            }`}
          >
            {keyword}
          </span>
        ))}
        <Box />
      </>
    </KeywordsContainer>
  )
}

export default Keywords
