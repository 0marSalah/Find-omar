import styled from "styled-components";
import img from "/home/omar/Desktop/my-site/src/assets/WorldMap.svg"
import { FaAngleDoubleUp, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link as LinkS } from "react-scroll";


export const Wrapper = styled.div`
  background-color: #000;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    font-family: 'Raleway';
    color: #eee;
  }

  .subparagraph {
    color: #04c2c9;
    margin-top: -25px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 5px 0px;
  margin-bottom: 50px;

  * {
    color: #eee;
  }
`
export const Input = styled.input`
  min-width: 40vw;
  padding: 10px 20px;
  background-color: #333;
  border: none;
  margin-bottom: 3px;
  font-size: 17px;

  :focus {
    outline: none;
    border: none;
  }

  @media (max-width: 1020px) {
    min-width: 80vw;
  }
`
export const TextArea = styled.textarea`
  padding: 10px 20px;
  background-color: #333;
  border: none;
  height: 300px;
  font-size: 18px;

  :focus {
    outline: none;
    border: none;
  }
`
export const Submit = styled.input`
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
export const Footer = styled.footer`
  width: 100vw;
  height: 250px;
  background-color: #090909;
  border-top: 1px #050505 solid;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const GoWrap = styled(LinkS)`
  background-color: #e31b6d;
  padding: 10px;
  cursor: pointer;
  /* margin-left: calc(50% - 25px);
  transform:translate(-50%, 0px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;*/
  margin-top: -25px; 
  border-radius: 10px;
`
export const Go = styled(FaAngleDoubleUp)`
  font-size: 30px;
`
export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;
`
export const Item = styled.li`
  padding: 15px 0;
  background-color: #333;
  margin-inline: 10px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  :hover {
    transition: all ease-in-out 0.2s;
    background-color: #e31b6d;
  }
`
export const Link = styled.a`
  text-decoration: none;
  padding: 15px;
`
export const CopyRight = styled.h4`
  margin: 0;
  color: #e31b6d;
`
