import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

// Images
import image from "../../images/family-car.png"

const Products = () => {
  return (
    <StyledProducts>
      <Header>Products</Header>
      <Intro>
        Safe roads are the basis for a SafeCity. We use spacedata to warn,
        inform and advise consumers as well as local authorities.
      </Intro>
      <Wrapper>
        <Left>
          An application made for consumers. In this sense of the word, road
          users. In this concept we index Dutch roads and give them a safety
          score. An example could be the difference in height, which might be a
          puthole or wear and tear. Another index is the amount of lights near
          the road. Road’s that aren’t well lit are often seen in the same areas
          as traffic accidents - and even deaths. We hope to make drivers aware
          of these roads and give them a safe trip to their destination. In the
          future we might have travel advice based on other factors like the
          weather.
        </Left>
        <Right>
          <img src={image} />
        </Right>
      </Wrapper>
    </StyledProducts>
  )
}

export default Products

const StyledProducts = styled(Section)``

const Intro = styled.div`
  width: 40%;
  font-size: 1.4rem;
  margin: 15px 0;
  line-height: 30px;
  font-weight: 700;
`

const Wrapper = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  line-height: 20px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
