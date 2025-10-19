import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  background: #ffffff38;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #01DF76;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  text-decoration: none;
  background-color: #333;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #007bff;
  }
`;

function ProjectCard({ project }) {
  return (
    <CardContainer>
      <CardImage src={project.image} alt={project.title} />
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <TagsContainer>
          {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </TagsContainer>
        <LinksContainer>
          <LinkButton href={project.live_url} target="_blank" rel="noopener noreferrer">Ver Online</LinkButton>
          <LinkButton href={project.code_url} target="_blank" rel="noopener noreferrer">Código</LinkButton>
        </LinksContainer>
      </CardContent>
    </CardContainer>
  );
}

export default ProjectCard;