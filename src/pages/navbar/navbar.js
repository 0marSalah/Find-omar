import { BsList } from "react-icons/bs";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  background-color: #000;
  color: #eee;
  border-bottom: #333 solid 0.5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding-inline: 10vw;
  align-items: center;
  transition: all ease-in-out 0.5s;
  margin-top: ${({ scrollNav }) => (scrollNav ? "0px" : "-100px")};
  z-index: 999999;
`
export const Logo = styled.div`
  margin-left: -20px;
`
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavLink = styled(LinkS)`
  padding-inline: 10px;
  padding-block: 5px;
  font-size: 1.1rem;
  font-weight: 100;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &.active {
    color: #e31b6d;
  }

  &:hover {
    transition: all ease-in-out 0.2s;
    /* color: #e31b6d; */
  }
`
//  RESPONSIVE
export const Icon = styled.div`
  position: absolute;
  right: 40px;
  top: 0.8rem;
  font-size: 30px ;
  cursor: pointer;
  padding: 12.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  transition: all 0.6s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`
export const CloseIcon = styled(BsList)`
  color: #f1f1f1;
  cursor: pointer;
`
export const ResList = styled.ul`
  list-style: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 75px;
  top: ${({ onclick }) => (onclick ? "93px" : "-600px")};
  transition: all 0.3s ease-in-out;
  background-color: #000;
  padding: 1rem 2rem;

  @media (min-width: 768px) {
    display: none;
    transition: all 0.3s ease-in-out;
  }
`
export const ResLink = styled(LinkS)`
  padding-inline: 10px;
  padding-block: 7.5px;
  font-size: 1.1rem;
  font-weight: 100;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    transition: all ease-in-out 0.2s;
    color: #e31b6d;
  }
`