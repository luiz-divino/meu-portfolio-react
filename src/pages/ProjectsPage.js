import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../data/projects'; 
import ProjectCard from '../components/ProjectCard'; 

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

function ProjectsPage() {
  return (
    <ProjectsContainer>
      <PageTitle>Meus Projetos</PageTitle>
      <ProjectsGrid>
        {}
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default ProjectsPage; 