import React from "react"
import { Global, css } from "@emotion/core"
import Header from "./header"
import "../assets/scss/animate.min.css"
import { TweenMax } from "gsap"
import $ from 'jquery/dist/jquery.slim'

// let $ = require('jquery')(window)
// $ = window.$

// const {JSDOM} = require('jsdom');
// const myJSDOM = new JSDOM(html);
// var jsdom = require('jsdom')

// var $ = require('jquery');
window.$ = $;
window.jQuery = $;
global.jQuery = $;

if (typeof window !== "undefined") {
  window.WOW = require("wow.js")
}
function Box(){
  if(mouseOver()){
    return <div id="box1" className="hoverBox" />
  }else{
    return <div id="box" className="hoverBox"/>
  }
}
// var imgTag = document.getElementsByTagName('img');
// var hoverBox =document.getElementsByClassName('hoverBox');
function mouseOver(){
  var isMouseOver=false;
  $('img').on('mouseover',function(){
    isMouseOver=!isMouseOver;
  })
  // for(let i=0;i<imgTag.length;i++){
  //   imgTag[i].addEventListener('mouseover',function(event){
  //       isMouseOver=!isMouseOver;
  //   })
  // }
  return isMouseOver;
}

const Layout = ({ children }) => {
  React.useEffect(() => {
    TweenMax.set(".hoverBox", { xPercent: -50, yPercent: -50 })

    document.addEventListener("mousemove", event => {
      const { clientX, clientY } = event
      TweenMax.to(".hoverBox", 0.2, { x: clientX, y: clientY })
    })

    // imgTag.addEventListener('mouseover',function(event){
    //   for(let i=0;i<hoverBox.length;i++){
    //     hoverBox[i].setAttribute('id','box1');
    //   }
    // });
    // for(let k=0;k<imgTag.length;k++){
    //   imgTag[k].addEventListener('mouseover',function(event){
    //     for(let i=0;i<hoverBox.length;i++){
    //       hoverBox[i].setAttribute('id','box1');
    //     }
    //   });
    //   imgTag[k].addEventListener('mouseout',function(event){
    //     for(let i=0;i<hoverBox.length;i++){
    //       hoverBox[i].setAttribute('id','box');
    //     }
    //   });
    // }
    // imgTag.addEventListener('mouseout',function(event){
    //   for(let i=0;i<hoverBox.length;i++){
    //     hoverBox[i].setAttribute('id','box');
    //   }
    // });
    $('img').on('mouseover',function(){
      console.log('Image hovered');
      $('.hoverBox').attr('id','box1');
    })
    $('img').on('mouseout',function(){
        $('.hoverBox').attr('id','box');
    })

    if (typeof window !== "undefined") {
      const wow = new window.WOW({
        boxClass: "wow", // default
        animateClass: "animated", // default
        offset: 0, // default
        mobile: false, // default
        live: true, // default
      })
      wow.init()
    }
  }, [])
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* * + * {
            margin-top: 1rem;
          } */

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;
            background-color: #fff;
            /* Remove margin for main div that gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5 rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }

          .light {
            font-weight: 100;
          }

          .bold {
            font-weight: 700;
          }

          .italic {
            font-style: italic;
          }
        `}
      />
      <main
        css={css`
          /* margin: 2rem auto 4rem; */
          /* max-width: 90vw; */
          /* width: 550px; */
        `}
      >
        {/* <Keywords /> */}

        {children}
        <Box />
        
      </main>
      <Header />
    </>
  )
}

export default Layout
