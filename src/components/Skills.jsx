import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Container,
  Box, Button, Stack, Fade
} from '@mui/material';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMongodb, SiMysql, SiJsonwebtokens } from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} color="#e44d26" />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#264de4" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#f0db4f" />, category: "Frontend" },
  { name: "React.js", icon: <FaReact size={40} color="#61DBFB" />, category: "Frontend" },
  { name: "Redux", icon: <SiRedux size={40} color="#764abc" />, category: "Frontend" },
  { name: "Context API", icon: <SiJsonwebtokens size={40} color="#9c27b0" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3c873a" />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, category: "Database" },
  { name: "SQL", icon: <SiMysql size={40} color="#00758f" />, category: "Database" },
];

// const categories = ["All", "Frontend", "Backend", "Database"];

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const filteredSkills = filter === "All"
    ? skills
    : skills.filter(skill => skill.category === filter);

  return (
    <Container sx={{ py: 10 }} id="skills" data-aos="fade-up">
      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
        My Tech Stacks
      </Typography>

      {/* <Stack direction="row" spacing={2} mb={4} flexWrap="wrap"  rowGap={2} justifyContent={{ xs: 'flex-start', md: 'flex-start' }}>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "contained" : "outlined"}
            onClick={() => setFilter(cat)}
            color="primary"
          >
            {cat}
          </Button>
        ))}
      </Stack> */}

      <Grid container spacing={3}>
        {filteredSkills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Fade in timeout={500}>
              <Card
                sx={{
                  textAlign: 'center',
                  background: '#1e293b',
                  border: '1px solid #38bdf8',
                  // py: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)',
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={1}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" color="primary">
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
