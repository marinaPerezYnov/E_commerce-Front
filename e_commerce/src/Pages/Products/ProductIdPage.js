import React, { useState, useEffect, useContext, use } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Typography, List, ListItem } from '@mui/material';
import { ProductContext } from './ProductContext';
import { getProductById } from './../../Requests_API/Product';

const ProductIdPage = () => {
    const { product, setProduct } = useContext(ProductContext);
    /* Récupérer la valeur {id} de cette url /produits/admin/produit/${id} */
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getProductById(id).then((response) => {
                const product = response;
                setProduct(product);
            });
        }
    }, [id, setProduct]);

    return (
        <Container sx={{
            backgroundColor: 'dodgerblue',
            color: 'white',
            padding: '2% 5%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Detail du produit
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Nom: {product.nom}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Description: {product.description}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Prix: {product.prix}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Quantite: {product.quantite}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Status: {product.status}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Picture: {product.picture}
                    </Typography>
                </ListItem>
            </List>
        </Container>
    );
}

export default ProductIdPage;