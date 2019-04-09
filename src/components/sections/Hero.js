import React from "react"
import styled from "styled-components"

// Style
import Section from "../layout/Section"
import bg from "../../images/bg.jpg"

const Hero = () => {
  return (
    <StyledHero>
      <h1>CMGD</h1>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled(Section)`
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  z-index: -1;
  background-position: center;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 0;
  }

  h1 {
    z-index: 1;
    font-family: "Poppins";
    font-size: 4rem;
    color: #fff;
    font-weight: 900;
    letter-spacing: 2px;
    margin-bottom: 40px;
  }
`
