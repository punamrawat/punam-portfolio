// src/components/About.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 10 }} id="about" data-aos="fade-right">
      <Typography variant="h4" color="primary" gutterBottom>About Me</Typography>
      <Typography sx={{ maxWidth: 700 }}>
        I'm <strong>Punam Rawat</strong>, a passionate Full-Stack Web Developer based in Uttarakhand.
        I love building responsive web applications using modern technologies like React.js, Node.js, Redux,
        Context API, MongoDB, and SQL. I enjoy solving real-world problems and continuously learning to improve
        my skills.
      </Typography>
    </Container>
  );
};

export default About;
