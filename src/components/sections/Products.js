import React from "react"
import styled from "styled-components"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

// Images
import familyCar from "../../images/car.png"
import workGuy from "../../images/traffic-light.png"

const Products = () => {
  return (
    <>
      <StyledProducts>
        <Wrap>
          <First>
            <Wrapper>
              <Header>Products</Header>
              <Intro>
                Safe roads are the basis for a SafeCity. We use spacedata to
                warn, inform and advise consumers as well as local authorities.
              </Intro>
              <Left>
                1. An application made for consumers. In this sense of the word,
                road users. In this concept we index Dutch roads and give them a
                safety score. An example could be the difference in height,
                which might be a puthole or wear and tear. Another index is the
                amount of lights near the road. Road’s that aren’t well lit are
                often seen in the same areas as traffic accidents - and even
                deaths. We hope to make drivers aware of these roads and give
                them a safe trip to their destination. In the future we might
                have travel advice based on other factors like the weather.
              </Left>
            </Wrapper>
            <Right>
              <img src={familyCar} alt="car" />
            </Right>
          </First>
        </Wrap>
      </StyledProducts>

      <Second>
        <StyledProductsAlt>
          <Wrap className="wrap">
            <Wrapper>
              <Left>
                2. An application made for local authorities. Using the same
                data but in a different way. This way the authorities can
                anticapate problems on roads and other areas by checking the
                space data we supply. This way we can highlight ‘problem’ areas.
                Which makes it easier to send workers or other services to fix
                or prevent the problems. By having an interactive map we make it
                easier for the authorities to make decisions based on the
                gravity of an area. In the future, drivers might be able to vote
                on particular areas to raise concern. This way the community has
                a vote and you have input from different sources.
              </Left>
            </Wrapper>
            <Right>
              <img src={workGuy} alt="car" />
            </Right>
          </Wrap>
        </StyledProductsAlt>
      </Second>
    </>
  )
}

export default Products

const StyledProducts = styled(Section)`
  display: flex;
  background-color: #689187;
  color: "#35333";
`

const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
`

const StyledProductsAlt = styled(Section)`
  display: flex;
  flex-flow: row-reverse;
  color: "#35333";
  .wrap {
    flex-flow: row-reverse;
  }
`

const First = styled.div`
  display: flex;
`

const Second = styled.div`
  background-color: #f2f4f5;
  color: white;
  padding: 80px 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Intro = styled.div`
  font-size: 1.4rem;
  margin: 15px 0;
  line-height: 30px;
  font-weight: 700;
`

const Left = styled.div`
  flex: 1;
  line-height: 20px;
  color: #284f70;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 280px;
  }
`
