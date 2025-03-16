import React from 'react';
import { Container, ListItem, Typography, List, Card } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomePage = () => {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            marginRight: "0",
            fontFamily:'var(--secondary-police)',
            width: "50%",
        }}>
            <Card sx={{
                width: "100%",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "20px",
                backgroundColor: "mistyrose",
            }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{
                    marginTop: "10%",
                    width: "100%",
                }}>
                    Bienvenue sur mon application
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom sx={{
                    width: "100%",
                    marginTop: "5%",
                }}>
                    L'objectif  est la mise en place d'une application qui implémente les microservices.
                </Typography>
                
                <Typography variant="h6" component="h2" gutterBottom sx={{
                    width: "100%",
                }}>
                    Ici sont représentés les microservices suivants:
                </Typography>

                <List sx={{
                    width: "100%",
                }}>
                    <ListItem>
                        <ChevronRightIcon />
                        Utilisateur
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon />
                        Produits
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon />
                        Personnalisation graphique
                    </ListItem>
                </List>

                <Typography variant="h6" component="h2" gutterBottom sx={{
                    width: "100%",
                    marginTop: "5%",
                }}>
                    Les méthodes CRUD ont été mise en place pour chaque microservice.
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom sx={{
                    width: "100%",
                }}>
                    Les bases de données utilisées sont:
                </Typography>
                <List sx={{
                    width: "100%",
                }}>
                    <ListItem>
                        <ChevronRightIcon />
                        PostgreSQL
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon />
                        MongoDB
                    </ListItem>
                </List>
            </Card>
        </Container>
    );
};

export default HomePage;