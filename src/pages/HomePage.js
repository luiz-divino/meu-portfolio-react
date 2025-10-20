import React from "react";
import styled from "styled-components";
import ProfilePic from "../assets/img/logo.png";

const HomePageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const ContentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;


  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }

`;

const TextContainer = styled.div`
  flex: 1;
  order: 2;

  @media (max-width: 768px) {
    order: 1;
}

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #888;
    margin-bottom: 1.5rem;

  @media (min-width: 768px) {
      font-size: 1.5rem;
    }

  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const LinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
    background-color: #01DF76;
    color: #121212;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5%;
  object-fit: cover; 

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;




function HomePage() {
  return (
    <HomePageContainer>
      <ContentSection>
        <TextContainer>
          <h1><span style={{ color: '#CCCCCC' }}>Olá</span>, eu sou Luiz Fernando</h1>
          <h2>Desenvolvedor de software</h2>
          <p style={{ color: '#CCCCCC' }}>
            Estudante de Engenharia de Software no Ibmec-RJ, apaixonado por
            transformar problemas complexos em soluções elegantes e funcionais.
            Estou sempre em busca de novos desafios para aprender e crescer.
          </p>
          <LinksContainer>
            <a href=" https://github.com/luiz-divino" target="_blank" rel="noreferrer">GitHub</a>
            <a href=" www.linkedin.com/in/luizsdivino" target="_blank" rel="noreferrer">LinkedIn</a>
          </LinksContainer>
        </TextContainer>

        <ImageContainer>
          <ProfileImage src={ProfilePic} alt="Foto de Luiz Fernando" />
        </ImageContainer>


      </ContentSection>
    </HomePageContainer>

  )
}

export default HomePage;