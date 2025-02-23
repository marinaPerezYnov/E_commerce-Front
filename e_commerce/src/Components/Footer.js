import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

function Footer() {
    const navItems = ["Accueil", "Boutique", "Produits", "Personnalisation", "Contact"];
    return (
        <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    E-commerce Site
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Your one-stop shop for all your needs!
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                    {navItems.map((item) => (
                        <Link key={item} href="#" variant="body2" color="inherit" sx={{ mx: 1 }}>
                            {item}
                        </Link>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;