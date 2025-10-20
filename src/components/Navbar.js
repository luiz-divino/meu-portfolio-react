import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from '../assets/img/logo.png';

const StyledLink = styled(Link)`
  color: #01DF76;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #555;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavLogo = styled(Link)` // O logo também é um link para a home
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem 0;
    align-items: center;
  }


`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContainer>
      <NavLogo to="/">
        <img src={logoImage} alt="imagem da logo" style={{ height: '50px' }} />
      </NavLogo>

    <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>




      <NavLinks>
        <li>
          <StyledLink to="/" onClick={()=> setIsOpen(false)}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/projetos" onClick={()=> setIsOpen(false)}>Projetos</StyledLink>
        </li>
        <li>
          <StyledLink to="/contato" onClick={()=> setIsOpen(false)}>Contatos</StyledLink>
        </li>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar;