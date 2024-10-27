import React from 'react';
import { Box, Typography, Button, Container, Avatar } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 8,
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Avatar
          alt="Micheal Smith"
          src="/path-to-your-image.jpg"
          sx={{ width: 150, height: 150, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, and Welcome!
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
         I am a graduate student at Stockholm School of
Economics. My main research focuses on gender and social
norms in developing countries. For more information,
please see my
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;