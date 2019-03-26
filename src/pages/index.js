import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Nav>
      <div className="nav__left">
        <span>CMGD</span>
      </div>

      <ul className="nav__right">
        <li>Team</li>
        <li>Journey</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </Nav>
    <Hero>
      <h1>CMGD</h1>
    </Hero>

    <Team>
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
    </Team>

    <Journey>
      <Header>The Journey</Header>
      <div className="journey__inner">
        <div className="journey__left journey__content" />
        <div className="line" />
        <div className="journey__right journey__content" />
      </div>
    </Journey>

    <Products>
      <Header>Products</Header>
      <ProductInner>
        <div>
          <p>
            1. An application made for consumers. In this sense of the word,
            road users. In this concept we index Dutch roads and give them a
            safety score. An example could be the difference in height, which
            might be a puthole or wear and tear. Another index is the amount of
            lights near the road. Road’s that aren’t well lit are often seen in
            the same areas as traffic accidents - and even deaths. We hope to
            make drivers aware of these roads and give them a safe trip to their
            destination. In the future we might have travel advice based on
            other factors like the weather.
          </p>
        </div>
        <div />
      </ProductInner>
    </Products>

    <Application />

    <Contact>
      <Header>Contact</Header>
      <ProductInner>
        <div />
        <div>
          <p>
            2. An application made for local authorities. Using the same data
            but in a different way. This way the authorities can anticapate
            problems on roads and other areas by checking the space data we
            supply. This way we can highlight ‘problem’ areas. Which makes it
            easier to send workers or other services to fix or prevent the
            problems. By having an interactive map we make it easier for the
            authorities to make decisions based on the gravity of an area. In
            the future, drivers might be able to vote on particular areas to
            raise concern. This way the community has a vote and you have input
            from different sources.
          </p>
        </div>
      </ProductInner>
    </Contact>
  </div>
)

const Section = styled.section`
  width: 100vw;
  min-height: 400px;
  padding: 50px;
  position: relative;
`

const ProductInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  div {
    width: 50%;
  }
`

const Header = styled.h1`
  position: absolute;
  top: 30px;
  left: 30px;
  color: #000;
  font-size: 2rem;
`

const Application = styled(Section)`
  background-color: #000;
`

const Contact = styled(Section)``

const Products = styled(Section)``

const Journey = styled(Section)`
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

const Team = styled(Section)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

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

const Hero = styled(Section)`
  height: 100vh;
  background-image: url("https://unsplash.it/2000");
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
    text-align: center;
  }
`

const Nav = styled.nav`
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

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins');

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}


:focus {
  outline: 0;
}

* { 
  color: #fff;
}


article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

h1, h2, h3, p, span, li, div {
  color: #fff;
  font-family: "Poppins" !important;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="search"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  max-width: 100%;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden] {
  display: none;
}

html {
  font-size: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -ms-text-size-adjust: 100%; /* 2 */
}

a:focus {
  outline: thin dotted;
}

a:active,
a:hover {
  outline: 0;
}

img {
  border: 0; /* 1 */
  -ms-interpolation-mode: bicubic; /* 2 */
}

figure {
  margin: 0;
}

form {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0; /* 1 */
  padding: 0;
  white-space: normal; /* 2 */
  *margin-left: -7px; /* 3 */
}

button,
input,
select,
textarea {
  font-size: 100%; /* 1 */
  margin: 0; /* 2 */
  vertical-align: baseline; /* 3 */
  *vertical-align: middle; /* 3 */
}
button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
  *overflow: visible; /* 4 */
}



button[disabled],
html input[disabled] {
  cursor: default;
}


input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
  *height: 13px; /* 3 */
  *width: 13px; /* 3 */
}

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}


input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto; /* 1 */
  vertical-align: top; /* 2 */
}



table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
button,
input,
select,
textarea {
  color: #222;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

img {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

`

export default IndexPage
