import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

import guido from "../../images/guido.jpg"
import fabian from "../../images/fabian.jpeg"
import vincent from "../../images/vincent-jackson.png"
import jonathan from "../../images/jonathan.jpeg"

const Team = () => {
  return (
    <StyledTeam>
      <Header>The Team</Header>
      <div className="team">
        <div className="avatar__wrapper">
          <div className="avatar guido" />
          <h2>Guido</h2>
          <span>Development</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar fabian" />
          <h2>Fabian</h2>
          <span>Development</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar jonathan" />
          <h2>Jonathan</h2>
          <span>Design</span>
        </div>
        <div className="avatar__wrapper">
          <div className="avatar vincent" />><h2>Vincent</h2>
          <span>Design</span>
        </div>
      </div>
    </StyledTeam>
  )
}

export default Team

const StyledTeam = styled(Section)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 900;
  }

  .team {
    width: 600px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 80px 0px 50px;

    .avatar__wrapper {
      --margin: 40px;
      width: calc(100% / 2 - (var(--margin) * 2));
      height: auto;
      margin-bottom: var(--margin);

      .avatar {
        background-size: cover;
      }
      .guido {
        background-image: url(${guido});
      }
      .fabian {
        background-image: url(${fabian});
      }
      .vincent {
        background-image: url(${vincent});
      }
      .jonathan {
        background-image: url(${jonathan});
      }

      h2,
      span {
        color: #000;
        text-align: center;
        margin: 0 auto;
        display: block;
      }

      h2 {
        font-weight: 900;
        font-size: 1.2rem;
        margin-bottom: 20px;
      }

      .avatar {
        background-color: #000;
        width: 200px;
        height: 200px;
        border-radius: 50% 50%;
        margin: 0 auto 20px;
      }
    }
  }
`
