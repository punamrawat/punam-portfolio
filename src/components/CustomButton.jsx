// src/components/CustomButton.jsx
import React from 'react';
import { Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
const CustomButton = ({ href, label, icon, download = false }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      href={href}
      target="_blank"
      download={download ? '' : undefined}
      sx={{
        mt: 2,
        // backgroundColor: '#a3e635',
        color: '#000',
        fontWeight: 600,
        borderRadius: 20,
        px: 3,
        '&:hover': { 
            // backgroundColor: '#bef264'
         },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
