import styled from "styled-components";

export const Wrapper = styled.div`
  padding-inline: 250px;
  padding-block: 40px;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.8) 0%,  rgba(0,0,0,0.7) 100%);
  * {
    font-family: 'Raleway';
  }
  @media (max-width:1038px) {
    padding-inline: 0px;
    margin-left: 0px;
  }
`
export const Container = styled.div`

`
export const ProjectsWrapper = styled.div`
  /* margin-left: ${({ scroll }) => (scroll ? "0px" : "-2000000000vw")}; */
`
export const ProjectsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  /* opacity: ${({ hover }) => (hover ? "0" : "1")}; */
`
export const ToolsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;

  .active {
    min-width: 150px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    background-color: #e31b6d;

    h5 {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    display: none;
  }
`
export const Tool = styled.li`
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h5 {
    font-size: 20px;
  }
`
export const Project = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ease-in-out all 2s;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
      z-index: ${({ hover }) => (hover ? "2" : "-1")};
  }
`
export const HoverContainer = styled.div`
  position: absolute;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9)  100%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  z-index: 99;

  * {
    color: #fff;
    font-size: 16px;
    text-align: center;
  }

`
export const Content = styled.div`
  margin: 20px 0;
  
`
export const Title = styled.h1`
  font-size: 25px;
  margin-block: -20px 5px;
`
export const Tools = styled.div`
  color: #e31b6d;
`
export const Button = styled.div`
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
export const Subtitle = styled.div`

`
export const CoverD = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  transition: ease-in-out all 2s;
`
export const Cover = styled.img`
  width: 100%;
  height: 400px;
`