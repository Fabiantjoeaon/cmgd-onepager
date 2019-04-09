import React from "react"
import styled from "styled-components"
import { Timeline, TimelineEvent } from "react-event-timeline"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

// Images
import ideation from "../../images/ideation.jpg"
import concepting from "../../images/concepting.jpg"
import pitching from "../../images/pitching.jpg"
import iteration from "../../images/iteration.jpg"
import concept from "../../images/concept.jpeg"
import pres from "../../images/pres.png"
import pres2 from "../../images/pres2.png"
import feedback from "../../images/feedback.jpeg"

const Journey = () => {
  return (
    <StyledJourney>
      <TimelineWrapper>
        <Header className="header">The Journey</Header>
        <Timeline lineColor="rgba(40, 79, 112, 0.15)">
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">The Briefing</h1>
              <p className="paragraph">
                “Develop a SafeCity concept using available space data.” That’s
                what was asked.
              </p>
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Time to research!</h1>
              <p className="paragraph">
                Deskresearch - Who is CGI? - What is a SafeCIty? - Stakeholders?
                These gave us a better hold of the situation.
              </p>
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Ideation</h1>
              <p className="paragraph">
                Time to put our research to the test. Using ideation methods we
                came up with some solid ideas!
              </p>
              <img src={ideation} alt="car" className="event" />
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Concepting</h1>
              <p className="paragraph">
                It’s nice to have a good idea. But a good idea is not a concept.
                In this fase we develop the idea with a fresh look on the
                context and use.
              </p>
              <img src={concepting} alt="car" className="event" />
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Pitching</h1>
              <p className="paragraph">
                We pitch our concept. On this trip to CGI we talk about our
                thoughts and gather feedback. This feedback is of the utmost
                importance to evolve the concept!
              </p>
              <img src={pitching} alt="car" className="event" />
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Sharpening it up</h1>
              <p className="paragraph">
                We resume the operations, with a fresh look and different
                insights we take a critical look at what might be flaws within
                our concept. Is the space data we have usable in a meaningful
                way?
              </p>
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <div className="content-wrapper">
              <h1 className="title">Iteration</h1>
              <p className="paragraph">
                We iterate. We change up our battle plan and work towards a more
                specialized concept. Instead of taking on a bunch of problems we
                focus on one theme: The safety of roads. What can space data
                mean to drive back the injuries and deaths in certain areas?
              </p>
              <img src={iteration} alt="car" className="event" />
            </div>
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <h1 className="title">Killing our darlings for a new concept</h1>
            <p className="paragraph">
              Our current concept didn't quite fit with the current use of space
              data, which in the end should be the main exit point of this
              project. For this reason we killed of our previous concept of
              improving the liveability of neighbourhoods and came up with a
              concept. We got inspired for this new concept by the fact that the
              amount of deaths on the dutch roadways are linked by the amount of
              light. We brainstormed a lot for this new subject and came up with
              two new concepts which we can later choose from, after we've
              presented these to CGI.
            </p>
            <img src={concept} alt="concept" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <h1 className="title">
              Pitching two new concepts and choosing one
            </h1>
            <p className="paragraph">
              We pitched our new concepts for CGI, received feedback and chose
              one of them.
            </p>
            <img src={pres} alt="concept" className="event" />
            <img src={pres2} alt="concept" className="event" />
            <img src={feedback} alt="concept" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card" bubbleStyle={{ display: "none" }}>
            <h1 className="title">CMGD continues the play</h1>
            <p className="paragraph">
              We gather feedback. The concept appears to have a better goal. We
              feel that, the people feel it. Working on a prototype and
              delivering visuals to clarify our concept is our #1 priority.
            </p>
          </TimelineEvent>
        </Timeline>
      </TimelineWrapper>
    </StyledJourney>
  )
}

export default Journey

const StyledJourney = styled(Section)`
  background-color: #fdb5ad;
  display: flex;
  justify-content: center;
  svg {
    width: 15px;
  }
`

const TimelineWrapper = styled.div`
  margin-top: 30px;
  max-width: 800px;
  > * {
    color: #284f70;
  }
  .title {
    font-size: 1.4rem;
  }
  .paragraph {
    margin: 10px 0;
  }
  .card {
    display: flex;
    flex-direction: column;
  }
  .content-wrapper {
    padding: 25px 12px;
  }
  .event {
    width: 400px;
    max-width: 400px;
  }
`
