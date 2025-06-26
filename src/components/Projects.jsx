import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectCard from './ProjectCard';

// Tech icons
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/javascript.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongo.png';
import expressLogo from '../assets/express.png';
// import contextLogo from '../assets/context.png';

// Videos
import counterVideo from '../assets/counter-app-video.mp4';
import todoVideo from '../assets/todo-app-video.mp4';
import tictactoeVideo from '../assets/tic-tac-toe-video.mp4'; // Optional

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="projects" sx={{ py: 10 }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>My Projects</Typography>

      <ProjectCard
        title="Counter App"
        description="A simple counter application built using <b>React.js</b> and <b>Context API</b>. Demonstrates <b>useReducer</b> and clean state handling."
        features={[
          '– Increment / Decrement functionality.',
          '– Reset counter.',
          '– Styled with <b>Material UI</b>.',
        ]}
        techIcons={[reactLogo, jsLogo,]}
        sourceCode="https://github.com/punamrawat/counter-app"
        media={counterVideo}
        reverse={false}
      />

      <ProjectCard
        title="ToDo App"
        description="A full-stack ToDo app using <b>React.js</b>, <b>Node.js</b>, and <b>MongoDB</b>. Store and manage your tasks easily."
        features={[
          '– Add, edit, delete, complete tasks.',
          '– REST API using <b>Express</b>.',
          '– MongoDB for backend storage.',
        ]}
        techIcons={[reactLogo, nodeLogo, mongoLogo, expressLogo]}
        sourceCode="https://github.com/punamrawat/todo-app"
        media={todoVideo}
        reverse={true}
      />

      <ProjectCard
        title="Tic-Tac-Toe"
        description="A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript, featuring:"
        features={[
          '– Two-Player Mode – Players take turns marking X and O on a 3x3 grid.',
          '– Winning Detection – Automatically detects winning conditions and announces the winner.',
          '– Draw Condition – Displays a draw message when the grid is full and no player wins.',
        ]}
        techIcons={[reactLogo, nodeLogo, mongoLogo]}
        sourceCode="https://github.com/punamrawat/chat-app"
        media={tictactoeVideo}
        reverse={false}
      />
    </Container>
  );
};

export default Projects;
