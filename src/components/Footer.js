import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #fff;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 90%;
  max-width: 1200px;
  text-align: center;

  p {
    margin: 0;
    white-space: normal; /* evita quebra de linha */
    overflow: hidden;
    text-overflow: ellipsis; /* evita overflow extremo */
  }

`;

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>© {currentYear} Luiz Fernando.<br />
        Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;