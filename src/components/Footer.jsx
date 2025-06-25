// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box sx={{ py: 4, textAlign: 'center', borderTop: '1px solid #334155', mt: 4 }}>
      <Typography variant="body2" sx={{ color: '#94a3b8' }}>
        © {new Date().getFullYear()} Punam Rawat • All Rights Reserved
      </Typography>
      <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link href="https://github.com/yourgithub" target="_blank"><FaGithub size={24} color="#38bdf8" /></Link>
        <Link href="https://linkedin.com/in/yourlinkedin" target="_blank"><FaLinkedin size={24} color="#38bdf8" /></Link>
      </Box>
    </Box>
  );
};

export default Footer;
