import React from "react"
import css from "@emotion/css"
import { FooterContainer } from "../styled/StyledComponents"
import Instagram from "../assets/images/instagram.svg"
import Facebook from "../assets/images/facebook.svg"
import Linkedin from "../assets/images/linkedin.svg"
import Twitter from "../assets/images/twitter.svg"
import Dots from "../assets/images/Olir_UI-04.png"
import { Link } from "gatsby"

function Footer() {
  return (
    <FooterContainer>
      <div className="content">
        <div className="left-section section">
          <div>
            <img
              css={css`
                width: 60px;
                max-width: 60px;
                height: auto;
              `}
              src={require("../assets/images/olir-white.png")}
            />
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
        </div>
        <div className="section right-section">
          <div className="links-container">
            <a href="/#" className="link">
              Home
            </a>
            <a href="/#why-us" className="link">
              Why Us
            </a>
            <a href="/#services" className="link">
              Services
            </a>
            <a href="/#clients" className="link">
              Clients
            </a>
            <a href="/#" className="link">
              A Day In Our Life
            </a>
            <a href="/#" className="link">
              Case Study
            </a>
          </div>
          <div className="social-links">
            <a target="_blank" href="https://www.instagram.com/olirmedia/">
              <img src={Instagram} />
            </a>
            <a target="_blank" href="https://www.facebook.com/olirmedia">
              <img src={Facebook} />
            </a>
            <a target="_blank" href="https://twitter.com/olirmedia">
              <img src={Twitter} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/olir-media"
            >
              <img src={Linkedin} />
            </a>
          </div>
          <div className="dots">
            <img src={Dots} />
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
