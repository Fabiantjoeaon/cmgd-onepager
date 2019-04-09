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

const Journey = () => {
  return (
    <StyledJourney>
      <Header>The Journey</Header>
      <TimelineWrapper>
        <Timeline>
          <TimelineEvent className="card">
            <h1 className="title">The Briefing</h1>
            <p className="paragraph">
              “Develop a SafeCity concept using available space data.” That’s
              what was asked.
            </p>
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Time to research!</h1>
            <p className="paragraph">
              Deskresearch - Who is CGI? - What is a SafeCIty? - Stakeholders?
              These gave us a better hold of the situation.
            </p>
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Ideation</h1>
            <p className="paragraph">
              Time to put our research to the test. Using ideation methods we
              came up with some solid ideas!
            </p>
            <img src={ideation} alt="car" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Concepting</h1>
            <p className="paragraph">
              It’s nice to have a good idea. But a good idea is not a concept.
              In this fase we develop the idea with a fresh look on the context
              and use.
            </p>
            <img src={concepting} alt="car" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Pitching</h1>
            <p className="paragraph">
              We pitch our concept. On this trip to CGI we talk about our
              thoughts and gather feedback. This feedback is of the utmost
              importance to evolve the concept!
            </p>
            <img src={pitching} alt="car" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Sharpening it up</h1>
            <p className="paragraph">
              We resume the operations, with a fresh look and different insights
              we take a critical look at what might be flaws within our concept.
              Is the space data we have usable in a meaningful way?
            </p>
          </TimelineEvent>
          <TimelineEvent className="card">
            <h1 className="title">Iteration</h1>
            <p className="paragraph">
              We iterate. We change up our battle plan and work towards a more
              specialized concept. Instead of taking on a bunch of problems we
              focus on one theme: The safety of roads. What can space data mean
              to drive back the injuries and deaths in certain areas?
            </p>
            <img src={iteration} alt="car" className="event" />
          </TimelineEvent>
          <TimelineEvent className="card">
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
  color: "red";
  svg {
    width: 15px;
  }
`

const TimelineWrapper = styled.div`
  margin-top: 30px;
  .title {
    font-size: 1.4rem;
  }
  .paragraph {
    margin: 10px 0 15px 0;
  }
  .card {
    display: flex;
    flex-direction: column;
  }
  .event {
    width: 400px;
    max-width: 400px;
  }
`
