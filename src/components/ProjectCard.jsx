import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Dialog } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import CustomButton from './CustomButton';

const ProjectCard = ({ title, description, features, techIcons, sourceCode, media, reverse }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 6,
        gap: 4,
        backgroundColor: '#0f172a',
        borderRadius: 3,
        px: 3,
        py: 5,
        boxShadow: 4,
                  border: "2px solid #38bdf8",

      }}
    >
      {/* Text Section */}
      <Box flex={1}>
        <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>{title}</Typography>
        <Typography
          variant="body1"
          sx={{ color: '#cbd5e1', mb: 2 }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Typography variant="subtitle1" sx={{ color: '#a3e635', mb: 1 }}>Key Features</Typography>
        <ul style={{ color: '#e2e8f0', paddingLeft: '1.2rem' }}>
          {features.map((f, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: f }} />
          ))}
        </ul>

        <CustomButton href={sourceCode} label="Source Code" />

        {/* Tech Stack Icons */}
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          {techIcons.map((icon, i) => (
            <Box
              key={i}
              component="img"
              src={icon}
              alt="tech"
              sx={{ width: 60, height: 60 }} // ⬆️ Made icons bigger
            />
          ))}
        </Stack>
      </Box>

      {/* Video Preview Section */}
      <Box
        flex={1}
        sx={{
          maxWidth: 480,
          borderRadius: 2,
          overflow: 'hidden',
          // boxShadow: 2,
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.02)', // ⬅️ Hover Zoom
          },
        }}
        onClick={handleOpen}
      >
        {media && typeof media === 'string' && media.endsWith('.mp4') ? (
          <video src={media} controls style={{ width: '100%', borderRadius: 8 }} />
        ) : (
          <img src={media} alt="project" style={{ width: '100%', borderRadius: 8 }} />
        )}
      </Box>

      {/* Modal Dialog for full video preview */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ p: 1, backgroundColor: '#000' }}>
          {media && typeof media === 'string' && media.endsWith('.mp4') ? (
            <video src={media} autoPlay controls style={{ width: '100%' }} />
          ) : (
            <img src={media} alt="Preview" style={{ width: '100%' }} />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProjectCard;
