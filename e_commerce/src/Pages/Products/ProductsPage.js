import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, FormGroup, Grid2, List, ListItem, Toolbar, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ProductContext } from './ProductContext';
import { getProducts } from './../../Requests_API/Product';

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [admin, setAdmin] = useState(false);
    const { product, setProduct } = React.useContext(ProductContext);
    const [tags, setTags] = useState('');
    const navigate = useNavigate();

    const picture = "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    useEffect(() => {
        getProducts()
        .then((response) => {
            setProducts(response);
        })
        .catch((error) => {
            console.log('error =>', error);
        });

    }, []);

    useEffect(() => {
        // setAdmin(true);
        setTags('tag1, tag2, tag3');
    }, [products]);

    const updateProduct = (id) => {
        navigate(`/produits/admin/produit/${id}`)
    };

    const deleteProduct = () => {};

    const addProductToCart = () => {};

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    
    return (
        <Grid2>
            <Typography>Produits</Typography>
            <Grid2 container sx={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
            }}>
                <Grid2 item xs={12} sm={6}>
                    <AppBar position='static'>
                        <Toolbar sx={{
                            backgroundColor: 'darkcyan',
                        }}>
                            {/** Barre de recherche */}
                            <Search>
                                <SearchIconWrapper>
                                <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>

                    <Divider sx={{
                        marginTop: '10%',
                    }} />
                    {/** Checkbox de mots clés */}
                    <FormGroup sx={{
                        marginTop: '5%',
                    }}>
                        {tags.split(',').map((tag) => (
                            <FormControlLabel control={<Checkbox />} label={tag} />
                        ))}
                    </FormGroup>

                    <Divider />
                    {/** Checkbox de mots clés */}
                    <FormGroup sx={{
                        marginTop: '5%',
                    }}>
                        {tags.split(',').map((tag) => (
                            <FormControlLabel control={<Checkbox />} label={tag} />
                        ))}
                    </FormGroup>

                </Grid2>
                <Grid2 item xs={12} sm={6} sx={{
                    width: '75%',
                }}>
                    {admin && (
                       <Button onClick={() => navigate('/produits/admin/produit')} sx={{
                            backgroundColor: 'darkcyan',
                            color: 'white',
                            width: '40%',
                            marginBottom: '5%'
                        }}>Ajouter un produit</Button>
                    )}
                    <List sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    {products.map((product) => 
                        
                        <ListItem sx={{
                            width: '25%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                            <Typography sx={{
                                width: '100%'
                            }}>
                                <stron>{product.nom}</stron></Typography>
                            <Typography sx={{
                                width: '100%'
                            }}><strong>Prix :</strong> {product.prix}</Typography>
                            <Typography sx={{
                                width: '100%'
                            }}><strong>Description :</strong> {product.description}</Typography>
                            <img src={product.picture} alt={product.nom} style={{
                                width: '100%',
                            }} />
                            
                            <Divider sx={{
                                marginTop: '10%'
                            }}/>

                            {admin ? (
                                <Grid2 sx={{
                                    marginTop: '5%'
                                }}>
                                    <Divider />
                                    <Button sx={{
                                        backgroundColor: 'darkcyan',
                                        color: 'white',
                                        width: '100%',
                                        marginTop: '5%'
                                    }} onClick={()=>updateProduct(product._id)}>Modifier</Button>
                                    <Button sx={{
                                        backgroundColor: 'darkcyan',
                                        color: 'white',
                                        width: '100%',
                                        marginTop: '5%'
                                    }} onClick={deleteProduct}>Supprimer</Button>
                                </Grid2>
                            )
                            :   
                                <Grid2 sx={{
                                    marginTop: '5%'
                                }}>
                                    <Button sx={{
                                        backgroundColor: 'darkcyan',
                                        color: 'white',
                                        width: '100%',
                                        marginTop: '5%'
                                    }} onClick={()=>navigate(`/produit/${product._id}`)}>Voir les détails</Button>
                                    <Button sx={{
                                        backgroundColor: 'darkcyan',
                                        color: 'white',
                                        width: '100%',
                                        marginTop: '5%'
                                    }} onClick={addProductToCart}>Ajouter au panier</Button>
                                </Grid2>
                            }
                        </ListItem>
                    )}
                    </List>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

export default ProductPage;