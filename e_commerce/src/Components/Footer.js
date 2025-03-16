import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

function Footer() {
    const navItems = ["Accueil", "Produits", "Personnalisation"];
    return (
        <Box sx={{ 
            backgroundColor: 'darkcyan',
            p: 6,
            fontFamily:'var(--first-police)',
            color: 'white',
            }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Site multiservices
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