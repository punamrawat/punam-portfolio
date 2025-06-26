// src/components/Skills.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Context API", "Node.js", "MongoDB", "SQL"
];

const Skills = () => {
  return (
    <Container sx={{ py: 10 }} id="skills" data-aos="fade-up">
      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>Skills</Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card sx={{ textAlign: 'center', background: '#1e293b', border: '1px solid #38bdf8' }}>
              <CardContent>
                <Typography variant="h6" color="primary">{skill}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
