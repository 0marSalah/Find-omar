import React, { useState, useEffect } from 'react'
import {SkillBar} from 'react-skillbars'
import { AboutData } from '../../data/db'
import { NavLink } from '../navbar/Navbar'
import {
  Wrapper,
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

} from './About'

const About = () => {
  const skills = [
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 90 },
    { type: 'JavaScript', level: 75 },
    { type: 'TypeScript', level: 65 },
    { type: 'React', level: 80 },
    { type: 'Node.Js', level: 60 },
    { type: 'NEXT.Js', level: 45 },
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
    if (window.scrollY >= 350) {
      setScroll(true)
    } 
  }

  useEffect(() => {
    window.addEventListener("scroll", changenav)
  }, [])
  return (
    <Wrapper id='about' scroll={scroll}>
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
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            marginBlock: '20px',
          }}>
          <Left>
            <MeWrapper>
              <Img src={require('../../assets/edit.png')} alt="" />
            </MeWrapper>
            <h1>Who's this guy?</h1>
            <Desc>I'm a Front-End Developer based on Aswan/Egypt <br />
              I have serious passion for animations and creating intuitive, dynamic websites and web applications.
              </Desc>
            <NavLink style={{
              color: "#04c2c9"
            }} to="contact">Let's make something special.
            </NavLink>
          </Left>
          </div>
          <Right>
            <SkillBar skills={skills} animationDelay={180} colors={colors} height={'5vh'} style={{borrderRadius: '5px'}}/>
          </Right>
        </SkillsContainer>
    </Wrapper>
  )
}

export default About