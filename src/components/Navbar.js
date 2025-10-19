import React from "react";
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

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

function Navbar() {
    return (
       <NavContainer>
        <NavLogo to="/">
        <img src={logoImage} alt="imagem da logo" style={{ height: '50px' }} />
        </NavLogo>
        <NavLinks>
            <li>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
                <StyledLink to="/projetos">Projetos</StyledLink>
            </li>
            <li>
                <StyledLink to="/contato">Contatos</StyledLink>
            </li>
        </NavLinks>
       </NavContainer>
    )
}

export default Navbar;