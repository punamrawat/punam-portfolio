// src/components/Footer.jsx
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: 'background.paper',
        borderTop: '1px solid #334155',
        mt: 4,
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        © {new Date().getFullYear()} Punam Rawat. All rights reserved.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          href="mailto:punamrawat1323@gmail.com"
          sx={{ color: '#38bdf8' }}
        >
          <FaEnvelope />
        </IconButton>

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
    </Box>
  );
};

export default Footer;
