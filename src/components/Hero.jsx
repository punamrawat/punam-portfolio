import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import CustomButton from './CustomButton';
import myPhoto from '../assets/p.jpg';
import resumeFile from '../assets/Punam_Rawat_React_Developer.pdf';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 4, md: 22 },
        // py: 8,
        // backgroundColor: 'yellow',
        color: 'white',
        gap: { xs: 4, md: 2 }, // ⬅️ Reduced spacing between text & image
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          {/* <span style={{ color: 'red' }}>Hi</span>, */}
          Hi, I'm Punam Rawat
        </Typography>

        <Typography variant="h5" sx={{ mb: 1 }}>
          I'm a{' '}
          <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>
            <Typewriter
              words={['Web Developer','React Developer', 'Fullstack Developer', ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }}>
          I build responsive and scalable web applications using React.js, Node.js, and MongoDB.
          Experienced in building production-ready systems with clean UI and solid backend APIs.
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <IconButton href="mailto:punamrawat1323@gmail.com" target="_blank" sx={{ color: 'white', bgcolor: '#38bdf8' }}>
            <FaEnvelope />
          </IconButton>
          <IconButton href="https://github.com/punamrawat" target="_blank" sx={{ color: 'white', bgcolor: '#38bdf8' }}>
            <FaGithub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/punamrawat" target="_blank" sx={{ color: 'white', bgcolor: '#38bdf8' }}>
            <FaLinkedin />
          </IconButton>
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <CustomButton
            label="Download Resume"
            href={resumeFile}
            icon={<FaDownload />}
            download={true}
            // sx={{width:""}}
          />
          {/* <CustomButton
            label="See My Work"
            href="#projects"
            icon={<FaArrowRight />}
          /> */}
        </Stack>
      </Box>

      {/* Right Image */}
        <Box
        component="img"
        src={myPhoto}
        alt="Punam Rawat"
        sx={{
          width: { xs: "100%", sm: 300, md: 400 },
          height: { xs: "auto", md: 450 },
          objectFit: "cover",
          borderRadius: 4,
          border: "4px solid #38bdf8",
          boxShadow: 4,
        }}
        data-aos="zoom-in"
      />

    </Box>
  );
};

export default Hero;
