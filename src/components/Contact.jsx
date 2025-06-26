// src/components/Contact.jsx
import React from 'react';
import { Box, Typography, TextField, Stack, Paper } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import CustomButton from './CustomButton';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: { xs: 2, md: 3 },
        flexWrap: "wrap",
      }}
    >
      {/* Left - Contact Info */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 320,
          // backgroundColor: "background.paper",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Connect with me
        </Typography>

        <Stack spacing={2} mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <FaGithub size={20} />
            <Typography>Github</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <FaLinkedin size={20} />
            <Typography>LinkedIn</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <FaEnvelope size={20} />
            <Typography>punamrawat1323@gmail.com</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <FaPhoneAlt size={20} />
            <Typography>+91 8218366249</Typography>
          </Stack>
        </Stack>
      </Paper>

      {/* Right - Contact Form */}
      <Paper
        elevation={3}
        component="form"
        action="https://formspree.io/f/xkgbpekg"
        method="POST"
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 460,
          backgroundColor: "none",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Say Hi 👋
        </Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />

        <CustomButton type="submit" label="SEND" sx={{ mt: 2 }} fullWidth />
      </Paper>
    </Box>
  );
};

export default Contact;
