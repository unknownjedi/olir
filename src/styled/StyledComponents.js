import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"

export const LandingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background-color: ${cssVariables.$color_primary_black_1};
  padding: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hero-logo-container {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: exclusion;
    position: relative;
    word-break: break-all;
    overflow: hidden;
    border-radius: 50%;
    width: calc(100vw - 30px);
    height: calc(100vw - 30px);
    .keywords-container {
      display: block;
    }
    @media (min-width: 993px) {
      display: none;
    }
  }
  img.logo-main {
    max-width: 300px;
    &.mobile {
      @media (min-width: 993px) {
        display: none;
      }
    }
    &.desktop {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
  }
  .desktop-logo-background {
    width: calc(100vw / 3.5);
    height: calc(100vw / 3.5);
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    @media (max-width: 992px) {
      display: none;
    }
  }
  img.background-logo {
    display: none;
    max-height: 3000px;
    position: absolute;
    left: -220px;
    top: -925px;
    opacity: 0.1;
    @media (min-width: 993px) {
      display: block;
    }
  }
`

export const KeywordsContainer = styled.div`
  display: inline-flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  mix-blend-mode: lighten;
  display: none;
  pointer-events: none;
  position: absolute;
  /* background-color: rgba(255, 255, 255, 0.5); */
  @media (min-width: 993px) {
    height: calc(100vh);
    display: block;
    padding: 15px;
  }
  .keyword {
    line-height: 1.5;
    margin: 0 10px;
    text-transform: uppercase;
    font-family: ${cssVariables.$montserrat_bold};
    color: #1f1e1d;
    /* color: #fff; */
    font-size: 24px;
  }
  #box {
    display: none;
    width: 75px;
    height: 75px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: color;
    top: 0;
    left: 0;
    @media (min-width: 993px) {
      display: block;
    }
  }
  #box1 {
    display: none;
    width: 100px;
    height: 100px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: color;
    top: 0;
    left: 0;
    @media (min-width: 993px) {
      display: block;
    }
  }
`

export const WhyUsContainer = styled.div`
  background-color: ${cssVariables.$color_primary_white};
  padding: 40px 15px;
  .logo-dark {
    display: flex;
    justify-content: space-between;
    position: relative;
    img {
      &.logo-dark {
        cursor: pointer;
        width: 60px;
        height: 100%;
      }
      &.dots {
        width: 120px;
        height: auto;
        position: absolute;
        right: 0;
        top: 70px;
      }
    }
  }
  .container {
    display: flex;
    .img-placeholder {
      width: 230px;
      height: 230px;
      margin-bottom: 20px;
      display: none;
      @media (min-width: 993px) {
        display: block;
      }
      img {
        max-width: 100%;
      }
    }
    .content {
      font-family: ${cssVariables.$montserrat_bold};
      line-height: 2;
      flex: 1;
      @media (min-width: 993px) {
        margin-left: 30px;
      }
    }
  }
`

export const ServicesContainer = styled.div`
  background-color: ${cssVariables.$color_primary_white};
  padding: 15px;
  font-family: ${cssVariables.$montserrat_bold};
  min-height: 100vh;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1160px;
    margin: 0 auto;
    .service-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
      cursor: pointer;
      color: ${cssVariables.$color_primary_black_1};
      text-decoration: none;
      @media (min-width: 855px) {
        max-width: 165px;
        width: 25%;
        min-width: 25%;
      }
      &:hover {
        color: ${cssVariables.$color_primary_red};
      }
      .img-placeholder {
        width: 165px;
        height: 165px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-height: 150px;
          max-width: 150px;
        }
      }
      .title {
        @media (max-width: 854px) {
          max-width: 165px;
        }
        text-align: center;
      }
    }
  }
  .dots {
    img {
      transform: rotate(90deg);
      height: 50px;
      width: auto;
    }
  }
`

export const FooterContainer = styled.div`
  background-color: ${cssVariables.$color_primary_black_1};
  font-family: ${cssVariables.$josefin};
  color: ${cssVariables.$color_primary_gray};
  padding: 120px 30px;
  & > .content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    .section {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      margin-bottom: 40px;
      height: 100%;
      @media (max-width: 768px) {
        margin-bottom: 0;
      }
      .links-container {
        font-size: 16px;
        display: inline-flex;
        height: 100%;
        margin-top: 30px;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        .link {
          padding: 0 20px;
          border-right: 1px solid;
          color: ${cssVariables.$color_primary_white};
          text-decoration: none;
          @media (max-width: 768px) {
            border-right: none;
            padding: 0;
            margin-bottom: 20px;
          }
          cursor: pointer;
          &:last-child {
            border-right: none;
          }
        }
      }
      .social-links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 50px 0;
        @media (max-width: 992px) {
          justify-content: flex-start;
        }
        a {
          margin: 0 20px;
          img {
            height: 20px;
            width: auto;
          }
        }
      }
      .get-in-touch {
        margin-top: 50px;
        line-height: 2;
        .link {
          color: ${cssVariables.$color_primary_red};
          margin-bottom: 10px;
        }
        .phone {
          a {
            color: ${cssVariables.$color_primary_white};
          }
        }
        .email {
          opacity: 0.8;
          font-weight: 300;
          a {
            color: ${cssVariables.$color_primary_white};
          }
        }
        color: ${cssVariables.$color_primary_gray};
      }
      &.right-section {
        display: flex;
        flex-direction: column;
      }
      .dots {
        display: flex;
        justify-content: flex-end;
        margin: 50px 0;
        img {
          width: 100px;
          height: auto;
          object-fit: contain;
          transform: rotate(-90deg);
        }
      }
    }
  }
`

export const ContactInput = styled.input`
  outline: none;
  border-width: 0 0 1px 0;
  font-size: 22px;
  font-family: ${cssVariables.$montserrat_bold};
  text-align: center;
  width: 380px;
  ${props =>
    props.small &&
    css`
      max-width: 200px;
    `}
  ${props =>
    props.error &&
    css`
      border-color: red;
    `}
`

export const GetInTouch = styled.div`
  margin-top: 50px;
  line-height: 2;
  .link {
    color: ${cssVariables.$color_primary_red};
    margin-bottom: 10px;
  }
  .phone {
    a {
      color: ${cssVariables.$color_primary_white};
    }
  }
  .email {
    opacity: 0.8;
    font-weight: 300;
    a {
      color: ${cssVariables.$color_primary_white};
    }
  }
  color: ${cssVariables.$color_primary_gray};
`
export const OurWorksContainer = styled.div`
  .our-works-content {
    padding: 30px 0;
    .center {
      text-align: center;
    }
    .slick-arrow {
      background-color: black;
      border-radius: 50%;
    }
    .works-slide-container {
      display: flex;
      justify-content: center;
      .project-card {
        width: 300px;
        height: 500px;
        display: inline-flex;
        padding: 30px 0;
        border: 1px solid #1f1f1f;
        border-width: 1px 0 0 0;
        a {
          flex: 1;
          text-decoration: none;
        }
        .project-content {
          cursor: pointer;
          padding: 5px;
          display: flex;
          width: 100%;
          height: 100%;
          background-color: #1f1f1f;
          font-family: ${cssVariables.$josefin};
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${cssVariables.$color_primary_white};
          justify-content: flex-end;
          .number {
            font-weight: bold;
            font-family: ${cssVariables.$montserrat_bold};
            margin-left: 5px;
          }
        }
        &:nth-of-type(2) {
          margin-top: 70px;
          border-width: 0 0 1px 0;
          .project-content {
            background-color: #777576;
            align-items: flex-end;
          }
        }
      }
    }
    .mobile {
      @media (min-width: 993px) {
        display: none;
      }
    }
    .desktop {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
  }
`
