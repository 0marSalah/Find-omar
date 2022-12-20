import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { BsFilterSquare } from 'react-icons/bs'
import { ProjectsData, Toolslist } from '../../data/db'
import { H1D, H1 } from "../about/about"
import { Container, Cover, CoverD, Project, ProjectsContainer, ProjectsWrapper, Title, Tool, ToolsList, Wrapper, 
HoverContainer, Content, Button, Tools } from './work'

const Work = () => {
  const ref = useRef()
  const [projects, setProjects] = useState(ProjectsData)
  const [hover, setHover] = useState(false)

  const imgAnimate = () => {
    if (window.scrollY >= 2000) {
      projects.map(project => {
        const h = document.getElementById(project.id)
        h.className = 'animate__animated animate__backInLeft sc-ilhmMj kRhsbD'
      })
      // Toolslist.map((tool) => {
      //   const t = document.getElementById(tool)
      //   t.className = 'animate__animated animate__backInRight sc-gikAfH ktHcbS  '
      // })
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
          <ToolsList >
            {Toolslist.map((tool) => (
              <Tool onClick={(e) => changeActive(e)} className={tool === 'All' ? "active sc-gikAfH ktHcbS" : " " + "sc-gikAfH ktHcbS"} key={tool}>
                <h5>{tool}</h5>
              </Tool>
            ))}
          </ToolsList>
          <ProjectsContainer>
            {projects && projects.map(project => (
              <Project key={project.id} onMouseEnter={(e) => {
                const p = document.getElementById(project.title)
                p.style = "opacity: 0.99; transition: all ease-in-out 0.3s;"
                setHover(true)
              }} onMouseLeave={(e) => {
                const p = document.getElementById(project.title)
                p.style = "z-index: -1; transition: all ease-in-out 0.3s;"
                setHover(false)
              }}>
                <CoverD ref={ref} id={project.id} >
                  <Cover src={project.assets.cover} />
                </CoverD>
                
                  <HoverContainer id={project.title}>
                    <Content>
                      <Title>{project.title}</Title>
                      <Tools>{project.tool}</Tools>
                    </Content>
                    <Button>Learn More</Button>
                </HoverContainer>
                
              </Project>
            ))}
          </ProjectsContainer>
        </ProjectsWrapper>
      </Container>
    </Wrapper>
  )
}

export default Work