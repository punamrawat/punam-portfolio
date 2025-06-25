// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Header = ({ toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Punam Rawat</Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.to}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ textDecoration: 'none', color: '#fff', width: '100%' }}
            >
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="fixed" sx={{ backgroundColor: '#1e293b' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Punam Rawat
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ margin: '0 10px', cursor: 'pointer', color: '#38bdf8', fontWeight: '500' }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
           <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { backgroundColor: '#1e293b', color: '#fff' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
