import React from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import myPhoto from '../assets/punam.jpg';
import resumeFile from '../assets/Punam_Rawat_React_Developer.pdf'; // ✅ Make sure file is placed correctly

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        py: 8,
        gap: 6,
        backgroundColor: 'background.default', // ✅ No gradient
      }}
    >
      {/* Left: Portrait Photo */}
      <Box
        component="img"
        src={myPhoto}
        alt="Punam Rawat"
        sx={{
          width: { xs: '100%', sm: 300, md: 400 },
          height: { xs: 'auto', md: 500 },
          objectFit: 'cover',
          borderRadius: 4,
          border: '4px solid #38bdf8',
          boxShadow: 4,
        }}
        data-aos="zoom-in"
      />

      {/* Right: Text & Buttons */}
      <Stack spacing={2} sx={{ maxWidth: 600 }} textAlign={{ xs: 'center', md: 'left' }} data-aos="fade-up">
        <Typography variant="h3" color="primary">Hi, I'm Punam Rawat</Typography>

        <Typography variant="h5">
          I'm a{' '}
          <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
            <Typewriter
              words={["React Developer", "MERN Stack Developer", "Full Stack Engineer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Typography>

        <Typography>
          I build responsive and scalable web applications using React.js, Node.js, and MongoDB.
        </Typography>

        {/* Resume + Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mt: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            href={resumeFile}
            download="Punam_Rawat_React_Developer"
            size="small" // ✅ Smaller size
          >
            Download Resume
          </Button>

           {/* Email */}
          <IconButton
            href="mailto:punamrawat1323@gmail.com"
            sx={{ color: '#38bdf8' }}
          >
            <FaEnvelope />
          </IconButton>

          {/* Social Icons */}
          <IconButton
            href="https://github.com/punamrawat"
            target="_blank"
            sx={{ color: '#38bdf8' }}
          >
            <FaGithub />
          </IconButton>

          <IconButton
            href="https://linkedin.com/in/punamrawat"
            target="_blank"
            sx={{ color: '#38bdf8' }}
          >
            <FaLinkedin />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
