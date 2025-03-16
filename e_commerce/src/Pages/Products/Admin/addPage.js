import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { ProductContext } from './../ProductContext';
import { addProduct } from './../../../Requests_API/Product';

const AddProductPage = () => {
    const { product, setProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const [nom, setNom] = useState(product ? product.nom : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [prix, setPrix] = useState(product ? product.prix : 0.00);
    const [quantite, setQuantite] = useState(product ? product.quantite : 0);
    const [status, setStatus] = useState(product ? product.status : 'Disponible');
    const [picture, setPicture] = useState(product ? product.picture : '');
    const [ownerId, setOwnerId] = useState(sessionStorage.getItem('ownerId'));

    useEffect(() => {
        if (product) {
            setNom(product.name);
            setDescription(product.description);
            setPrix(product.price);
            setQuantite(product.quantite);
            setPicture(product.picture);
        }
    }, [product]);

    const handleSave = () => {
        const newProduct = { ownerId, nom, description, prix, quantite, status, picture };
        setProduct(newProduct);
        addProduct(newProduct);

        navigate('/produits');
    };

    useEffect(() => {
        console.log('product =>', product);
    }, [product]);

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
                {product ? 'Modifier le produit' : 'Ajouter un produit'}
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="Nom du produit"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    InputProps={{
                        style: { color: 'white' },
                    }}
                />
                <TextField
                    label="Prix"
                    type="number"
                    value={prix}
                    onChange={(e) => setPrix(parseFloat(e.target.value))}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    InputProps={{
                        style: { color: 'white' },
                    }}
                />
                {/* Input selection quantité au format int */}
                <TextField
                    label="Quantité"
                    type="number"
                    value={quantite}
                    onChange={(e) => setQuantite(parseInt(e.target.value))}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    InputProps={{
                        style: { color: 'white' },
                    }}
                />
                <TextField
                    label="URL de l'image"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    InputProps={{
                        style: { color: 'white' },
                    }}
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    InputProps={{
                        style: { color: 'white' },
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    sx={{
                        backgroundColor: '#094989',
                        color: 'white',
                        width: '40%',
                        marginTop: '20px',
                    }}
                >
                    {product ? 'Modifier' : 'Ajouter'}
                </Button>
            </form>
        </Container>
    );
};

export default AddProductPage;