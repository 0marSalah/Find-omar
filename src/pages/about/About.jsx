import React, { useState, useEffect } from 'react'
import {SkillBar} from 'react-skillbars'
import { AboutData } from '../../data/db'
import { NavLink } from '../navbar/navbar'
import {
  Wrapper,
  Container,
  H1,
  CardContainer,
  Card,
  PhotoWrapper,
  Photo,
  H1D,
  SkillsContainer,
  Right,
  MeWrapper,
  Img,
  Desc,
  Left,

} from './about'

const About = () => {
  const skills = [
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 90 },
    { type: 'JavaScript', level: 75 },
    { type: 'React', level: 80 },
    { type: 'Node.Js', level: 60 },
  ];
  const colors = {
    bar: '#04c2c9a5',
    title: {
      text: '#b14a4a',
      background: '#04c2c9' ,
    },
  };

  const [scroll, setScroll] = useState(false)
  const changenav = () => {
    if (window.scrollY >= 300) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changenav)
  }, [])
  return (
    <Wrapper id='about' scroll={scroll}>
      <Container>
        <H1D><H1>ABOUT</H1></H1D>

        <CardContainer scroll={scroll}>
          {AboutData.map((card) => (
            <Card key={card.id}>
              <PhotoWrapper>
                <Photo src={card.icon} alt={card.title} />
              </PhotoWrapper>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Card>
          ))}
        </CardContainer>

        <SkillsContainer scroll={scroll}>
          <Left>
            <MeWrapper>
              <Img src={require('/home/omar/Desktop/my-site/src/assets/edit.png')} alt="" />
            </MeWrapper>
            <h1>Who's this guy?</h1>
            <Desc>I'm a Front-End Developer for ChowNow in Los Angeles, CA. <br />
              I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
              </Desc>
            <NavLink style={{
              color: "#04c2c9"
            }} to="contact">Let's make something special.
            </NavLink>
          </Left>
          <Right>
            <SkillBar skills={skills} animationDelay={180} colors={colors} height={'3vh'}/>
          </Right>
        </SkillsContainer>
      </Container>
    </Wrapper>
  )
}

export default About