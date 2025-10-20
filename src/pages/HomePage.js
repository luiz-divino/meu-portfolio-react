import React from "react";
import styled from "styled-components";
import ProfilePic from "../assets/img/logo.png";
import Footer from "../components/Footer";

const HomePageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const ContentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  height: auto;
  width: 80vw;


  @media (min-width: 768px) {
    text-align: center;
    gap: 4rem;
    height: 65vh;
  }

`;

const TextContainer = styled.div`
  order: 2;
  border: 2px solid #01DF76;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: auto;

  @media (min-width: 768px) {
    order: 1;
    text-align: justify;
}

  h1 {
    font-size: 2.2rem;
    text-align: start;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #888;

  @media (min-width: 768px) {
      font-size: 1.5rem;
    }

  }

  p {
    font-size: 1.1rem;
    line-height: 1.2;

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
    justify-content: center;
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
  display: none;
  width: 200px;
  height: 200px;
  border-radius: 5%;
  object-fit: cover; 

  @media (min-width: 768px) {
  display: inline-block;
    width: 250px;
    height: 250px;
  }
`;




function HomePage() {
  return (
    <HomePageContainer>
      <ContentSection>
        <TextContainer>
          <h1>Olá, eu sou Luiz Fernando</h1>
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

        <Footer />
      </ContentSection>
    </HomePageContainer>

  )
}

export default HomePage;