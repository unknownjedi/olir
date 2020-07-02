import React, { useState } from "react"
import { css } from "@emotion/core"
import { cssVariables } from "../helpers/colors"
import { Transition, config } from "react-spring/renderprops"
import MenuIcon from "../assets/images/menu.png"
import Menu from "./Menu"

const Header = () => {
  const [show, setShow] = useState(false)

  function closeMenu() {
    setShow(false)
  }

  return (
    <header
      css={css`
        background-color: ${cssVariables.$color_primary_black_1};
        display: flex;
        justify-content: space-between;
      `}
    >
      <button
        css={css`
          all: unset;
          margin: 40px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          background: ${cssVariables.$color_primary_black_1};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease-in;
          position: fixed;
          right: 10px;
          top: 0;
          z-index: 9999;
          opacity: ${show ? 0 : 1};
          @media (max-width: 1059px) {
            margin: 15px 10px;
          }
          &:hover {
            transform: scale(1.15);
          }
        `}
        onClick={() => setShow(!show)}
      >
        {/* <img
          css={css`
            width: 44px;
            height: auto;
          `}
          src={MenuIcon}
          alt="menu"
        /> */}
        <div className="menu-icon-container">
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>
      </button>
      <Transition
        items={show}
        from={{
          transform: `translateX(1500px) scale(0)`,
          opacity: 0,
          borderRadius: `50%`,
        }}
        enter={{
          transform: `translateX(0) scale(1)`,
          opacity: 1,
          borderRadius: `0%`,
        }}
        leave={{
          transform: `translateX(1500px),scale(0)`,
          opacity: 0,
          borderRadius: `50%`,
        }}
        config={{ ...config.default, duration: 500 }}
        native
        trail={200}
      >
        {show =>
          show && (props => <Menu props={props} closeMenu={closeMenu} />)
        }
      </Transition>
    </header>
  )
}

export default Header
