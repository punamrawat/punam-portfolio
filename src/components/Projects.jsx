// src/components/Projects.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';

const projects = [
  {
    title: "Restaurant Management System",
    tech: "React.js, Node.js, MySQL",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "LemaCare – Care Home System",
    tech: "React.js, Node.js, MongoDB",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "Chat Application",
    tech: "React.js, Context API, Socket.io",
    github: "https://github.com/yourusername/project3"
  }
];

const Projects = () => {
  return (
    <Container sx={{ py: 10 }} id="projects" data-aos="fade-up">
      <Typography variant="h4" color="primary" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ background: '#1e293b' }}>
              <CardContent>
                <Typography variant="h6" color="primary">{project.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{project.tech}</Typography>
                <Button variant="outlined" color="primary" href={project.github} target="_blank">
                  View Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
