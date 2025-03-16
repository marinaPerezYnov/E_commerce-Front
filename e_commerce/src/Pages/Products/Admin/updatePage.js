import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { ProductContext } from './../ProductContext';
import { updateProduct, getProductById } from './../../../Requests_API/Product';

const ProduitToUpdatePage = () => {
    const { product, setProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    /* Récupérer la valeur {id} de cette url /produits/admin/produit/${id} */
    const { id } = useParams();
    const [nom, setNom] = useState(product ? product.nom : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [prix, setPrix] = useState(product ? product.prix : 0.00);
    const [quantite, setQuantite] = useState(product ? product.quantite : 0);
    const [status, setStatus] = useState(product ? product.status : 'Disponible');
    const [picture, setPicture] = useState(product ? product.picture : '');
    const [ownerId, setOwnerId] = useState(sessionStorage.getItem('ownerId'));

    useEffect(() => {
        if (id) {
            getProductById(id).then((response) => {
                const product = response;
                console.log("product => ", product);
                setNom(product.nom);
                setDescription(product.description);
                setPrix(product.prix);
                setQuantite(product.quantite);
                setPicture(product.picture);
                setProduct(product);
            });
        }
    }, [id, setProduct]);

    const handleSave = () => {
        const updatedProduct = { ownerId, nom, description, prix, quantite, status, picture };
        setProduct(updatedProduct);
        updateProduct(id, updatedProduct);

        navigate('/produits');
    };

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
                    Modifier
                </Button>
            </form>
        </Container>
    );
};

export default ProduitToUpdatePage;