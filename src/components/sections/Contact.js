import React from "react"
import styled from "styled-components"

// Style
import Section from "../layout/Section"
import Header from "../layout/Header"

const Contact = () => {
  return (
    <Section>
      <Text>
        <h3>
          We’re hard at work to improve our concepts and show you what we can
          do! Stay tuned. Need to contact us? Don’t hesitate!
        </h3>
      </Text>
    </Section>
  )
}

export default Contact

const Text = styled.div`
  display: flex;
  justify-content: center;

  h3 {
    margin-top: 75px;
    line-height: 4rem;
    font-size: 1.4rem;
    max-width: 50%;
    font-weight: 900;
    text-align: center;
  }
`
