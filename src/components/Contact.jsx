// src/components/Contact.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ py: 10 }} id="contact" data-aos="fade-left">
      <Typography variant="h4" color="primary" gutterBottom>Contact Me</Typography>
      <Box
        component="form"
        sx={{ maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 2 }}
        action="mailto:yourmail@example.com"
        method="POST"
        encType="text/plain"
      >
        <TextField label="Name" name="name" required fullWidth />
        <TextField label="Email" name="email" required fullWidth />
        <TextField label="Message" name="message" required multiline rows={4} fullWidth />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </Box>
    </Container>
  );
};

export default Contact;
