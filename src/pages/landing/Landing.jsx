import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Button, Container, Content, LandB, VideoBg } from './landing'
import Video from '/home/omar/Desktop/my-site/src/assets/video.mp4'
import avatar from '/home/omar/Desktop/my-site/src/assets/me.png'
import { NavLink } from '../navbar/navbar'

const Landing = () => {
  const [hover, setHover] = useState(false)

  return (
    <Container id='home'>
      <LandB>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </LandB>
      <Content>
          <h1>
            Hello, I'm <span>Omar Salah</span> <br />
            Creative front-end web developer
          </h1>
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            to='signin'
          ><NavLink to="portfolio">Find my <span>Work</span></NavLink>
            <BsArrowRight style={{
              color: 'white',
              fontSize: '1.25em',
              marginLeft: '7.5px',
              marginTop: '1px',
              transition: 'all ease-in-out 0.2s',
              rotate: hover ? '90deg' : '0deg'
            }} />
          </Button>
      </Content>
    </Container>
  )
}

export default Landing