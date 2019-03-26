import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

const Journey = () => {
  return (
    <StyledJourney>
      <Header>The Journey</Header>
      <div className="journey__inner">
        <div className="journey__left journey__content" />
        <div className="line" />
        <div className="journey__right journey__content" />
      </div>
    </StyledJourney>
  )
}

export default Journey

const StyledJourney = styled(Section)`
  background-color: #d5d5d5;

  .journey__inner {
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .journey__content {
      width: 45%;
    }

    .line {
      width: 15px;
      border-radius: 20px;
      height: 1000px;
      background-color: #98a6e6;
    }
  }
`
