import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { AiOutlineClose } from 'react-icons/ai'

export const Wrapper = styled.div`
  border-radius: 20px;
  
  position: fixed;
  top: 93px;
  left: 0;
  opacity: ${({ specific }) => {
    if (specific) {
      return '1'
    } else {
      return '0'
    }
  }};
  z-index: ${({ specific }) => {
    if (specific) {
      return '9999'
    } else {
      return '-2'
    }
  }};
  background-color: #333;
  width: ${({ click }) => {
    if (click === 'outside') {
      return '0'
    } else return '600px'
  }};
  height: 800px;
  transition: all ease-in-out 0.3s;
  margin-left: 50%;
  transform: translate(-50%, 0px);
  background-color: #000;

  @media (max-width: 980px) {
    opacity: ${({ specific }) => {
    if (specific) {
      return '1'
    } else {
      return '0'
    }
  }};
  z-index: ${({ specific }) => {
    if (specific) {
      return '9999'
    } else {
      return '-2'
    }
  }};
  width: ${({ click }) => {
    if (click === 'outside') {
      return '0'
    } else return '90vw'
  }};
  }
`

export const Button = styled.a`
  text-decoration: none;
  background-color: transparent;
    border: 1px solid #f2f2f3;
    transition: all ease-in-out 0.3s;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 15px;
    /* width: fit-content; */
    cursor: pointer;
    width: 190px;
    height: 60px;

    &:hover {
      background-color: #04c2c9;
      border: 1px solid #04c2c9;
      transition: all ease-in-out 0.3s;
      span {
        color: #f2f2f3;
      }
    }
`
export const Container = styled.div`
  overflow: hidden;
`
export const Content = styled.div`
  z-index: ${({ specific }) => {
    if (specific) {
      return '9999'
    } else {
      return '-2'
    }
  }};
  font-size: ${({ click }) => {
    if (click === 'outside') {
      return '0'
    } else return '16px'
  }};
  padding: 20px 35px;
  line-height: 1.15;
`
export const Title = styled.h1`
  color: #eee;
`
export const Subtitle = styled.h5`
  color: #777;
`
export const Desc = styled.p`
  font-size: ${({ click }) => {
    if (click === 'outside') {
      return '0'
    } else return '15px'
  }};
  color: #eee;
  padding: 0px 35px;
  /* margin-inline: 5px; */
  line-height: 1.5;
`
export const ImgWrap = styled.div`
  width: 100%;
  height: 55vh;
  object-fit: cover;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1 !important;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%);
      z-index: ${({ hover }) => (hover ? "2" : "-1")};
  }
`
export const Img = styled.img`
  width: 100%;
  min-height: 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`
export const Slider = styled(Swiper)`
  background-color: red;
`
export const Icon = styled(FiExternalLink)`
  margin-inline: 0 5px;
`
export const Closing = styled.div`
  position: ${({ click }) => {
    if (click === 'outside') {
      return 'revert'
    } else return 'absolute'
  }};
  top: 12px;
  right: 15px;
  z-index: 9;
  transition: all 0.3 ease-in-out;
  cursor: pointer;
  background-color: #3333336f;
  padding: 5px;
`
export const Close = styled(AiOutlineClose)`
  font-size: 25px;
  color: #e31b6d;

  transition: all 0.3 ease-in-out;

  :hover {
    transition: all 0.3 ease-in-out;
    opacity: 0.6;
  }   
`