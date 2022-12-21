import React, { useEffect, useRef } from 'react'
import { Button, Closing, Icon, Wrapper, Container, Content, ImgWrap, Img, Title, Subtitle, Desc, Close } from './projectDetails'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Pagination]);

const ProjectDetails = ({ projects, specific, click, setClick }) => {

  const arr = projects.filter(project => project.id === specific)

  const refOne = useRef(null)

  const handeCleClickOutSide = (e) => {
    if (!refOne.current.contains(e.target)) {
      setClick('outside')
    } else {
      setClick('inside')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handeCleClickOutSide, true)
  }, [])

  return (
    <Wrapper ref={refOne} specific={specific} click={click}>
      {arr.map(project => (
        <Container>

          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides
            navigation
            pagination={{ clickable: true }}
            style={{
              backgroundColor: "#000"
            }}
          >
            <SwiperSlide >
              <ImgWrap>
                <Img src={project.assets.main} />
              </ImgWrap>
            </SwiperSlide>
            {project.assets.det1 && <SwiperSlide >
              <ImgWrap>
                <Img src={project.assets.det1} />
              </ImgWrap>
            </SwiperSlide>}
            {project.assets.det2 && <SwiperSlide >
              <ImgWrap>
                <Img src={project.assets.det2} />
              </ImgWrap>
            </SwiperSlide>}
          </Swiper>
          <Content specific={specific} click={click}>
            <Title>{project.title}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
          </Content>
          <Desc click={click}>{project.description}</Desc>
          <Button 
            href={project.url}
            target="_blank"
            style={{
              color: '#eee',
              marginInline: '35px',
              marginTop: '30px'
          }}><Icon /> View Site</Button>
          <Closing click={click} onClick={() => setClick('outside')} >
            <Close />
          </Closing>

        </Container>
      ))}
    </Wrapper>
  )
}

export default ProjectDetails