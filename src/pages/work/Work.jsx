import React, { useState } from "react";
import { useRef, useEffect } from "react";
import ProjectDetails from "../../components/ProjectDetails.jsx";
import { ProjectsData } from "../../data/db";
import { H1D, H1 } from "../about/About";
import {
  Container,
  Cover,
  CoverD,
  Project,
  ProjectsContainer,
  ProjectsWrapper,
  Title,
  Wrapper,
  HoverContainer,
  Content,
  Button,
  Tools,
} from "./Work";

const Work = () => {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [specific, setSpecific] = useState(null);
  const [click, setClick] = useState("inside");
  const [scroll, setScroll] = useState(false);

  const imgAnimate = () => {
    if (window.scrollY >= 1800) {
      ProjectsData.map((project) => {
        const h = document.getElementById(project.id);
        h.className = "animate__animated animate__backInLeft sc-ilhmMj kRhsbD";
      });
      setScroll(true);
      setHover(true);
    } else {
      setScroll(false);
      setHover(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", imgAnimate);
  }, []);

  return (
    <Wrapper id="portfolio">
      <Container>
        <H1D>
          <H1>Projects</H1>
        </H1D>
        <ProjectsWrapper scroll={scroll}>
          <ProjectsContainer hover={hover}>
            {ProjectsData &&
              ProjectsData.map((project) => (
                <Project
                  hover={hover}
                  key={project.id}
                  onMouseEnter={() =>
                    (document.getElementById(project.title).style =
                      "opacity: 0.99; transition: all ease-in-out 0.3s; height: 400px;")
                  }
                  onMouseLeave={() =>
                    (document.getElementById(project.title).style =
                      "z-index: -1; transition: all ease-in-out 0.3s;")
                  }
                >
                  <ProjectDetails
                    id={project.subtitle}
                    specific={specific}
                    projects={ProjectsData}
                    click={click}
                    setClick={setClick}
                  />
                  <CoverD ref={ref} id={project.id}>
                    <Cover src={project.assets.cover} />
                  </CoverD>

                  <HoverContainer id={project.title}>
                    <Content>
                      <Title>{project.title}</Title>
                      <Tools>{project.tool}</Tools>
                    </Content>
                    <Button
                      onClick={() => {
                        const p = document.getElementById(project.id);
                        setSpecific(p.id);
                        setClick("inside");
                      }}
                    >
                      Learn More
                    </Button>
                  </HoverContainer>
                </Project>
              ))}
          </ProjectsContainer>
        </ProjectsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Work;
