import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const drawerWidth = 240;
const navItemsNonAuthentified = [
    { text: "Se connecter", path: "/connection" },
    { text: "S'inscrire", path: "/inscription" },
    { text: 'Accueil', path: "/accueil" }
  ];

  const navItems = [
    { text: "Accueil", path: "/accueil" },
    { text: "Produits", path: "/produits" },
    { text: "Personnalisation", path: "/parametres" },
    { text: "Se déconnecter", path: "/deconnexion" }
  ];

const HeaderDrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isConnect } = React.useContext(AuthContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MULTI-SERVICES
      </Typography>
      <Divider />
      <List>
        {(isConnect ? navItems : navItemsNonAuthentified).map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }} onClick={()=>{
              if(item.text === "Se déconnecter") {
                sessionStorage.clear();
                navigate('/accueil');
              }
            }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      display: 'flex',
      fontFamily:'var(--first-police)',
      backgroundColor: 'var(--first-color)',
      }} class="header">
      <CssBaseline />
      <AppBar component="nav" sx={{
        backgroundColor: 'darkcyan'
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MULTI-SERVICES
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {(isConnect ? navItems : navItemsNonAuthentified).map((item) => (
              <Button key={item.text} component={Link} to={item.path} sx={{ color: '#fff' }} onClick={()=>{
                if(item.text === "Se déconnecter") {
                  sessionStorage.clear();
                  window.location.reload();
                }
              }}>
              {item.text}
            </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

HeaderDrawerAppBar.propTypes = {
  isConnect: PropTypes.bool.isRequired,
};
export default HeaderDrawerAppBar;