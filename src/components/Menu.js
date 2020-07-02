import React from "react"
import { animated } from "react-spring/renderprops"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import CloseIcon from "../assets/images/close.svg"
import { Link } from "gatsby"

const menuOptions = [
  {
    name: "home",
    to: "",
  },
  {
    name: "why us",
    to: "why-us",
  },
  {
    name: "services",
    to: "services",
  },
  {
    name: "clients",
    to: "clients",
  },
  {
    name: "Get in touch",
    to: "contact",
  },
]

const MenuItem = styled.a`
  opacity: 0.2;
  font-size: 40px;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  transition: transform 0.3s;
  font-family: ${cssVariables.$montserrat_bold};
  cursor: pointer;
  line-height: 1.8;
  text-decoration: none;
  &:hover {
    opacity: 1;
    transform: translateX(16px);
  }
`
function Menu({ props, closeMenu }) {
  return (
    <animated.div
      css={css`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #fff;
        transform-origin: top right;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        padding-left: calc((100% - 1060px) / 2 + 20px);
        @media (max-width: 1059px) {
          padding-left: 10%;
          padding-top: 15%;
        }
        @media (max-width: 380px) {
          padding-left: 6%;
          padding-top: 15%;
        }
        @media (max-width: 992px) {
          flex-direction: column;
          justify-content: flex-start;
        }
        z-index: 9999;
      `}
      style={props}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: calc((100% - 1000px) / 2 + 20px);
        `}
      >
        {menuOptions.map((menuOption, index) => (
          <MenuItem
            onClick={closeMenu}
            href={`/${menuOption.to == "contact" ? "" : "#"}${menuOption.to}`}
            key={index}
          >
            {menuOption.name}
          </MenuItem>
        ))}
      </div>
      <div className="get-in-touch">
        <Link className="no-underline" to="/contact">
          <div className="link ">LET'S TALK</div>
        </Link>

        <div className="email no-underline">
          <a
            className="no-underline"
            target="_blank"
            href="mailto: hello@olirmedia.com"
          >
            hello@olirmedia.com
          </a>
        </div>
        <div className="phone">
          <a className="no-underline" href="tel:+91-99123 99123">
            +91-99123 99123
          </a>
        </div>
      </div>
      <button
        css={css`
          all: unset;
          margin: 40px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease-in;
          box-shadow: 0px 2px 4px 1px #ccc;
          position: fixed;
          right: 10px;
          top: 0;
          z-index: 9998;
          border: 1px solid ${cssVariables.$color_primary_black_1};
          @media (max-width: 992px) {
            margin: 15px 10px;
          }
          &:hover {
            transform: scale(1.25);
          }
        `}
        onClick={closeMenu}
      >
        <img
          css={css`
            width: 24px;
            height: auto;
          `}
          src={CloseIcon}
          alt="close"
        />
      </button>
    </animated.div>
  )
}

export default Menu
