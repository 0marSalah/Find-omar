import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import ProjectDetails from '../../components/ProjectDetails';
import { ProjectsData, Toolslist } from '../../data/db'
import { H1D, H1 } from "../about/about"
import {
  Container, Cover, CoverD, Project, ProjectsContainer, ProjectsWrapper, Title, Tool, ToolsList, Wrapper,
  HoverContainer, Content, Button, Tools
} from './work'

const Work = () => {
  const ref = useRef()
  const [projects, setProjects] = useState(ProjectsData)
  const [hover, setHover] = useState(false)
  const [specific, setSpecific] = useState(null)
  const [click, setClick] = useState('inside')

  const imgAnimate = () => {
    if (window.scrollY >= 2000) {
      projects.map(project => {
        const h = document.getElementById(project.id)
        h.className = 'animate__animated animate__backInLeft sc-ilhmMj kRhsbD'
      })
      setHover(true)
    } else {
      setHover(false)
    }
  }

  const changeActive = (e) => {
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      e.currentTarget.parentNode.children[i].className = ' sc-gikAfH ktHcbS'
    }
    e.currentTarget.className = "active sc-gikAfH ktHcbS"
    const arr = ProjectsData.filter(project => project.fn === e.target.innerHTML)

    if (arr.length === 0) {
      setProjects(ProjectsData)
    } else {
      setProjects(arr)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", imgAnimate)
  }, [])

  return (
    <Wrapper id="portfolio" >
      <Container>
        <H1D>
          <H1>
            Projects
          </H1>
        </H1D>
        <ProjectsWrapper>
          {/* <ToolsList >
            {
              Toolslist.map((tool) => (
                <Tool
                  onClick={(e) => changeActive(e)}
                  className={tool === 'All' ? "active sc-gikAfH ktHcbS" : " " + "sc-gikAfH ktHcbS"}
                  key={tool}
                >
                  <h5>{tool}</h5>
                </Tool>
              ))
            }
          </ToolsList> */}
          <ProjectsContainer hover={hover}>
            {
              projects && projects.map(project => (
                <Project
                  hover={hover}
                  key={project.id}
                  onMouseEnter={() => document.getElementById(project.title).style = "opacity: 0.99; transition: all ease-in-out 0.3s; height: 400px;"}
                  onMouseLeave={() => document.getElementById(project.title).style = "z-index: -1; transition: all ease-in-out 0.3s;"}
                >
                  <ProjectDetails
                    id={project.subtitle}
                    specific={specific}
                    projects={projects}
                    click={click}
                    setClick={setClick}
                  />
                  <CoverD ref={ref} id={project.id} >
                    <Cover src={project.assets.cover} />
                  </CoverD>

                  <HoverContainer id={project.title}>
                    <Content>
                      <Title>{project.title}</Title>
                      <Tools>{project.tool}</Tools>
                    </Content>
                    <Button
                      onClick={() => {
                        const p = document.getElementById(project.id)
                        setSpecific(p.id)
                        setClick('inside')
                      }}
                    >Learn More</Button>
                  </HoverContainer>

                </Project>
              ))
            }
          </ProjectsContainer>
        </ProjectsWrapper>
      </Container>
    </Wrapper>
  )
}

export default Work