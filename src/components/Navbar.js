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
  gap: 6px;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    border-radius: 5px;
    display: block;
    transition: transform 300ms ease, opacity 200ms ease;
  }

  ${({ isOpen }) => isOpen && `
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavContainer = styled.nav`
  background-color: #333;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const NavLogo = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    z-index: 10;
    right: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem 0;
    align-items: center;

    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transition: transform 350ms cubic-bezier(.2,.8,.2,1), opacity 250ms ease;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContainer>
      <NavLogo to="/">
        <img src={logoImage} alt="imagem da logo" style={{ height: '50px' }} />
      </NavLogo>

      <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>




      <NavLinks isOpen={isOpen}>
        <li>
          <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/projetos" onClick={() => setIsOpen(false)}>Projetos</StyledLink>
        </li>
        <li>
          <StyledLink to="/contato" onClick={() => setIsOpen(false)}>Contatos</StyledLink>
        </li>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar;