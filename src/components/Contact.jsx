// src/components/Contact.jsx
import React from "react";
import { Box, Typography, TextField, Stack, Paper, Link } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { bgBG } from "@mui/material/locale";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: { xs: 4, md: 6 },
        flexWrap: "wrap",
        // bgcolor:"red",
      }}
    >
      {/* Left - Contact Info */}
      <Paper
        elevation={3}
        sx={{
          // mt: 14,
          p: 3,
          width: "100%",
          maxWidth: 320,
          borderRadius: 3,
          backgroundColor: "transparent",

          boxShadow: 4,
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Connect with me
        </Typography>

        <Stack spacing={5} mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <FaGithub size={20} />
            <Link
              href="https://github.com/punamrawat"
              underline="none"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              Github
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <FaLinkedin size={20} />
            <Link
              href="https://linkedin.com/in/punamrawat"
              underline="none"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              LinkedIn
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <FaEnvelope size={20} />
            <Link
              href="mailto:punamrawat1323@gmail.com"
              underline="none"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              punamrawat1323@gmail.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <FaPhoneAlt size={20} />
            <Link
              href="tel:+917351495907"
              underline="none"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              +91 7351495907
            </Link>
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
          backgroundColor: "transparent",
          borderRadius: 3,
          boxShadow: 4,
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
          },
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
          inputProps={{ style: { textTransform: "capitalize" } }}
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
          placeholder="Write your message here..."
        />

        <CustomButton
          type="submit"
          label="SEND MESSAGE"
          sx={{ mt: 2,}}
          fullWidth
        />
      </Paper>
    </Box>
  );
};

export default Contact;
