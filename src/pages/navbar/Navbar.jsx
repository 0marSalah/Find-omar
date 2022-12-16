import React, { useState, useEffect } from 'react'
import { Logo, List, NavLink, Wrapper, Icon, CloseIcon, ResList, ResLink } from './navbar'
import { BsList } from 'react-icons/bs'
import logo from '/home/omar/Desktop/my-site/src/assets/logo.png'

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const [onclick, setOnclick] = useState(false)
  const changenav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
      setOnclick(false)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changenav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Wrapper scrollNav={scrollNav}>
      <Logo>
        <NavLink to='home'>
          <img style={{ width: '70px', marginTop: "5px" }} src={logo} alt="logo" />
        </NavLink>
      </Logo>
      <List>
        <NavLink to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={350}
          exact='true'
          activeClass='active'>HOME</NavLink>
        <NavLink to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={350}
          exact={'true'}>ABOUT</NavLink>
        <NavLink to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
          exact={'true'}>PORTFOLIO</NavLink>
        <NavLink to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
          exact={'true'}>CONTACT</NavLink>
      </List>

      <Icon onClick={() => setOnclick(!onclick)}>
        <CloseIcon>
          <BsList />
        </CloseIcon>
      </Icon>
      <ResList onclick={onclick}>
        <NavLink to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={350}
          exact='true'
          activeClass='active'>HOME</NavLink>
        <NavLink to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={350}
          exact={'true'}>ABOUT</NavLink>
        <NavLink to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
          exact={'true'}>PORTFOLIO</NavLink>
        <ResLink to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
          exact={'true'}>CONTACT</ResLink>
      </ResList>
    </Wrapper>
  )
}

export default Navbar