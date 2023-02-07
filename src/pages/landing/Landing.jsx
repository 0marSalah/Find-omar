import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxResume } from "react-icons/rx";
import { Button, Container, Content, LandB, VideoBg } from "./Landing";
import { Button as ButtonA } from "../../components/ProjectDetails.js";
import Video from "../../assets/Orangevideo.mp4";
import { NavLink } from "../navbar/Navbar";

const Landing = () => {
  const [hover, setHover] = useState(false);
  const [hovera, setHovera] = useState(false);

  return (
    <Container id="home">
      <LandB>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandB>
      <Content>
        <h1>
          Hello, I'm <span>Omar Salah</span> <br />
          Front-end web developer <br />
        </h1>
        <div className="btn-wrap">
          <ButtonA
            onMouseEnter={() => setHovera(true)}
            onMouseLeave={() => setHovera(false)}
            href="https://drive.google.com/file/d/1LxDaeiv8LQyl6EjLdnMQv4eQeqr0D1Zz/view?usp=share_link"
            target="_blank"
          >
            My <span style={{ marginInline: "5px" }}>Resume</span>
            <RxResume
              style={{
                color: "white",
                fontSize: "1.25em",
                marginLeft: "0 !important",
                transition: "all ease-in-out 0.2s",
                rotate: hovera ? "-35deg" : "0deg",
              }}
            />
          </ButtonA>
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            to="signin"
          >
            <NavLink
              spy={true}
              smooth={true}
              offset={-50}
              duration={350}
              exact="true"
              to="portfolio"
            >
              Find my <span>Work</span>
            </NavLink>
            <BsArrowRight
              style={{
                color: "white",
                fontSize: "1.25em",
                marginLeft: "7.5px",
                marginTop: "1px",
                transition: "all ease-in-out 0.2s",
                rotate: hover ? "90deg" : "0deg",
              }}
            />
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Landing;
