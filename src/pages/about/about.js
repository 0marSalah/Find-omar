import styled from "styled-components";

export const Wrapper = styled.div`
  padding-inline: 300px;
  padding-block: 40px;
  transition: all ease-in-out 1.5s;
  margin-left: ${({ scroll }) => (scroll ? "0px" : "-1000vw")};
  background-image: linear-gradient(180deg, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.8) 0%,  rgba(0,0,0,0.7) 100%);
  * {
    font-family: 'Raleway';
    color: #eee;
  }
`
export const Container = styled.div`
  
`
export const H1D = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const H1 = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-block: 50px;
  position: relative;
  width: fit-content;

  :before {
    content: '';
    width: 60%;
    height: 2px;
    background: #eee;
    position: absolute;
    bottom: -10px;
    left: 50%;
    translate: -50%;
  }
`
export const CardContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  opacity: ${({ scroll }) => (scroll ? "1" : "0")};
`
export const Card = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 25px;
    margin: 10px 5px;
  }
`
export const PhotoWrapper = styled.div`
  background: #04c2c9;
  padding: 20px;
  border-radius: 28% 72% 32% 68% / 100% 64% 36% 0%  ;
`
export const Photo = styled.img`
  
`
//  -----------------------------
export const SkillsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  /* margin-top: ${({ scroll }) => (scroll ? "0px" : "-1000vw")}; */
  opacity: ${({ scroll }) => (scroll ? "1" : "0")};
  padding: 80px 0px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`
export const Left = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  * {
    text-align: center;
  }

  h1 {
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const MeWrapper = styled.div`
  background: #04c2c9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80% 20% 88% 12% / 73% 100% 0% 27%   ;
`
export const Img = styled.img`
  width: 300px;
`
export const Desc = styled.div`
  line-height: 1.5;
  font-size: 1rem;
`
export const Right = styled.div`
  width: 100%;
`
