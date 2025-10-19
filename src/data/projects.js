import React from 'react';
import projetoFutebol from '../assets/img/projetoFutebol.png';
import adivinhePersonagem from '../assets/img/projetoPersonagens.png';
export const projectsData = [
  {
    id: 1,
    title: 'Painel de futebol',
    description: 'Este foi meu primeiro projeto full-stack com banco de dados. Consegui integrar várias tecnologias para criar uma aplicação funcional. A ideia é exibir dados da equipe pesquisada, como noticias e sua próxima partida',
    image: projetoFutebol,
    tags: ['html', 'css', 'bootstrap', 'API', 'nodejs', 'postegresql'],
    live_url: 'https://github.com',
    code_url: 'https://github.com',
  },
  {
    id: 2,
    title: 'Adivinhe o personagem',
    description: 'Pequeno programa onde pratiquei minhas habilidades com html, css e lógica com javascript, a idéia é o usuário escolher um anime e tentar indicar o personagem citado através do enigma',
    image: adivinhePersonagem,
    tags: ['html', 'javascript', 'css'],
    live_url: 'https://github.com',
    code_url: 'https://github.com',
  },
];