import React from "react"
import styled from "styled-components"

const Nav = () => {
  return (
    <StyledNav>
      <div className="nav__left">
        <span>CMGD</span>
      </div>

      <ul className="nav__right">
        <li>Team</li>
        <li>Journey</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  width: 100vw;
  height: 80px;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #000;
  font-size: 1.2rem;
  color: #fff;
  z-index: 2;

  .nav__left {
    margin-left: 50px;
  }

  .nav__right {
    margin-left: 400px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    li {
      list-style-type: none;
      color: #fff;
      margin-left: 20px;
    }
  }
`
