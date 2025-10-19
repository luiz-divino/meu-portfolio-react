import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1.5rem 2rem;
  margin-top: 2rem; // Empurra o rodapé para baixo
`;

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>© {currentYear} Luiz Fernando. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;