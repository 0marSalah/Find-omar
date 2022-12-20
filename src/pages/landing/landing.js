import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  background-color: #0c0c0c;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
    z-index: 2;
  }
`
export const LandB = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100vw;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;  
`
export const Content = styled.div`
  font-family: 'Raleway';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: #f2f2f3;
  width: 99vw;
  max-width: 100vw;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 10vw;
  align-items: center;
  font-weight: 100;
  
  h1 {
    font-weight: 400;
  }

  span {
    color: #e31b6d;
    font-family: 'Raleway';
  }
  a {
    text-decoration: none;
    color: #f2f2f3;
    font-size: 1.1rem;
  } 

`
export const Button = styled(LinkS)`
  background-color: transparent;
    border: 1px solid #f2f2f3;
    transition: all ease-in-out 0.3s;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 20px;
    cursor: pointer;
    width: fit-content;

    &:hover {
      background-color: #04c2c9;
      border: 1px solid #04c2c9;
      transition: all ease-in-out 0.3s;
      span {
        color: #f2f2f3;
      }
    }
`