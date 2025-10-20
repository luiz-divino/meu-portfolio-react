import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const ProjectsContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
  }


`;

const PageTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem; // Fonte original no desktop
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function ProjectsPage() {
  return (
    <ProjectsContainer>
      <PageTitle>Meus Projetos</PageTitle>
      <ProjectsGrid>
        { }
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default ProjectsPage; 