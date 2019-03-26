import React from "react"
import styled from "styled-components"
import { Timeline, TimelineEvent } from "react-event-timeline"

// Style
import Header from "../layout/Header"
import Section from "../layout/Section"

const Journey = () => {
  return (
    <StyledJourney>
      <Header>The Journey</Header>
      <TimelineWrapper>
        <Timeline>
          <TimelineEvent title="The Briefing">
            “Develop a SafeCity concept using available space data.” That’s what
            was asked.
          </TimelineEvent>
          <TimelineEvent title="Time to research!">
            Deskresearch - Who is CGI? - What is a SafeCIty? - Stakeholders?
            These gave us a better hold of the situation.
          </TimelineEvent>
          <TimelineEvent title="Ideation">
            Time to put our research to the test. Using ideation methods we came
            up with some solid ideas!
          </TimelineEvent>
          <TimelineEvent title="Concepting">
            It’s nice to have a good idea. But a good idea is not a concept. In
            this fase we develop the idea with a fresh look on the context and
            use.
          </TimelineEvent>
          <TimelineEvent title="Pitching">
            We pitch our concept. On this trip to CGI we talk about our thoughts
            and gather feedback. This feedback is of the utmost importance to
            evolve the concept!
          </TimelineEvent>
          <TimelineEvent title="Sharpening it up">
            We resume the operations, with a fresh look and different insights
            we take a critical look at what might be flaws within our concept.
            Is the space data we have usable in a meaningful way?
          </TimelineEvent>
          <TimelineEvent title="Iteration">
            We iterate. We change up our battle plan and work towards a more
            specialized concept. Instead of taking on a bunch of problems we
            focus on one theme: The safety of roads. What can space data mean to
            drive back the injuries and deaths in certain areas?
          </TimelineEvent>
          <TimelineEvent title="CMGD continues the play">
            We gather feedback. The concept appears to have a better goal. We
            feel that, the people feel it. Working on a prototype and delivering
            visuals to clarify our concept is our #1 priority.
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
`
