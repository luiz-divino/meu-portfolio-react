import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  background-color: #01DF76;
  color: 01DF76;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #18623fff;
  }
`;

function ContactPage() {
  return (
    <ContactContainer>
      <PageTitle>Contato</PageTitle>
      <InfoText>
        Gostou do que viu? Vamos conversar! Preencha o formulário abaixo ou me encontre nas redes sociais.
      </InfoText>
      <Form action="https://formspree.io/f/manpkyzd" method="POST">
        <label htmlFor="name">Nome:</label>
        <Input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <Textarea id="message" name="message" required></Textarea>

        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </Form>
    </ContactContainer>
  );
}

export default ContactPage;