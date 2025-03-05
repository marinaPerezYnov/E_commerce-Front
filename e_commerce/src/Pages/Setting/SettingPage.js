import React, { use, useEffect, useState } from 'react';
import { FormGroup, Grid2, Switch, Typography, FormControlLabel, Button, Container, Icon } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingAccount from '../../Components/SettingAccount';
import SettingGraphic from '../../Components/SettingGraphic';
import { 
    createPersonnalisationGraphique, //createPersonnalisationGraphique(data)
    updatePersonnalisationGraphique, //updatePersonnalisationGraphique(id, data)
    getPersonnalisationGraphiqueByOwnerId, //getPersonnalisationGraphiqueByOwnerId(ownerId)
    deletePersonnalisationGraphique, //deletePersonnalisationGraphique(id)
} from './../../Requests_API/Personnalisation_Graphic';
import { changePassword, updateEmail, deleteAccount } from './../../Requests_API/User';


const parametersList = [
    " compte",
    " personnalisation Graphique",
]

// Bloc modifier ses données de compte
// Bloc de personnalisation graphique
const SettingPage = () => {
    const [parameters, setParameters] = useState(parametersList[0]);
    /* Account */
    const [editEmail, setEditEmail] = React.useState('');
    const [oldPassword, setOldPassword] = React.useState('');
    const [reinitializePassword, setReinitializePassword] = React.useState('');

    const [toDelete, setToDelete] = React.useState(false);
    const [toUpdate, setToUpdate] = React.useState(false);

    useEffect(() => {

        if(toDelete) {
            deleteAccount(sessionStorage.getItem('ownerId'));
            setToDelete(false);
        }

        if(toUpdate) {

            if(editEmail !== '') {
                updateEmail(sessionStorage.getItem('ownerId'), {
                    email: editEmail
                });
            }
            if(oldPassword !== '' && reinitializePassword !== '') {
                changePassword(sessionStorage.getItem('ownerId'), {
                    oldPassword,
                    newPassword: reinitializePassword
                });
            }
            setToUpdate(false);
        }
    
    },[toDelete, toUpdate, editEmail, oldPassword, reinitializePassword]);

    /* Graphic */
    const [idPersonnalisationGraphique, setIdPersonnalisationGraphique] = React.useState('');
    /** Fonts **/
    const [firstPolice, setFirstPolice] = React.useState('');
    const [secondaryPolice, setSecondaryPolice] = React.useState('');

    /** Colors **/
    const [firstColor, setFirstColor] = React.useState('');
    const [secondaryColor, setSecondaryColor] = React.useState('');
    const [thirdColor, setThirdColor] = React.useState('');

    const getAPersonnalisationGraphiqueByOwnerId = () => {
        getPersonnalisationGraphiqueByOwnerId(sessionStorage.getItem('ownerId'))
        .then((response) => {
            /*
                Enregistrement de l'id de la personnalisation graphique pour la fournir dans les requêtes
                 de mise à jour et de suppression de réservation graphique 
            */
            setIdPersonnalisationGraphique(response._id);
            console.log("response.primaryColor", response.primaryColor);
            setFirstPolice(response.firstPolice);
            setSecondaryPolice(response.secondaryPolice);
            setFirstColor(response.primaryColor);
            setSecondaryColor(response.secondaryColor);
            setThirdColor(response.thirdcolor);
        })
        .catch((error) => {
            if(error.response?.status === 404) {
                console.log("Not found");
            }
        });
    };
    useEffect(() => {
        getAPersonnalisationGraphiqueByOwnerId();
        console.log("firstColor", firstColor);
        firstColor !== '' && console.log("firstColor", firstColor);
    }, [firstColor]);

    const createNewPersonnalisationGraphique = () => {

        createPersonnalisationGraphique({
            ownerId: Number(sessionStorage.getItem('ownerId')),
            firstPolice: firstPolice,
            secondaryPolice: secondaryPolice,
            primaryColor: firstColor,
            secondaryColor: secondaryColor,
            thirdcolor: thirdColor
        });
        getAPersonnalisationGraphiqueByOwnerId();
    };

    const updatePersonnalisationGraphiqueById = () => {
                /* 
            Verification de la mise à jour de la personnalisation graphic 
            et de l'appel de fonction d'execution de requête update 
        */
       if( firstPolice !== '' && secondaryPolice !== '' && firstColor !== '' && secondaryColor !== '' && thirdColor !== '') {
            updatePersonnalisationGraphique(idPersonnalisationGraphique, {
                ownerId: Number(sessionStorage.getItem('ownerId')),
                firstPolice: firstPolice,
                secondaryPolice: secondaryPolice,
                primaryColor: firstColor,
                secondaryColor: secondaryColor,
                thirdcolor: thirdColor
            });
            getAPersonnalisationGraphiqueByOwnerId();
        }
    };

    const deletePersonnalisationGraphiqueById = (id) => {
        if(id !== '') {
            deletePersonnalisationGraphique(id);
            getAPersonnalisationGraphiqueByOwnerId();
        }
    };

    return(
        <Grid2 container spacing={2} sx={{
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Grid2 item xs={12} sm={6}>
                <FormGroup>
                    <FormControlLabel 
                        control={<Switch defaultChecked onChange={()=> {
                            if(parameters === parametersList[0]) {
                                setParameters(parametersList[1]);
                            } else {
                                setParameters(parametersList[0]);
                            }
                        }} />} 
                        label={parameters} 
                    />
                </FormGroup>
                <Typography variant="h4" component="h1" gutterBottom sx={{
                    textAlign: "left",
                }}>
                Paramètres de 
                    {parameters === parametersList[0] ? parametersList[0] : parametersList[1]}
                </Typography>
                <Container sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: {xs:"wrap", sm:"wrap", md:"nowrap"},
                }}>
                {
                    parameters === parametersList[0] ? 
                    <SettingAccount 
                        setEditEmail={setEditEmail} 
                        setOldPassword={setOldPassword} 
                        setReinitializePassword={setReinitializePassword} 
                        setToDelete={setToDelete} 
                        setToUpdate={setToUpdate}
                    />
                    : 
                    <SettingGraphic 
                        setFirstPolice={setFirstPolice} 
                        setSecondaryPolice={setSecondaryPolice}
                        setFirstColor={setFirstColor}
                        setSecondaryColor={setSecondaryColor}
                        setThirdColor={setThirdColor}
                        createNewPersonnalisationGraphique={createNewPersonnalisationGraphique}
                    />
                }
                <Grid2 item xs={12} sm={6}>
                    {/* Bloc qui va afficher les couleurs et les fonts choisies */}
                    <Grid2 item xs={12} sm={6} sx={{
                        padding: "5%",
                    }}>
                        {parameters === parametersList[1] &&
                        <>
                        <Typography variant="h6" component="h2" gutterBottom sx={{
                            textAlign: "left",
                            fontFamily: firstPolice === '' ? 'initial' : firstPolice
                        }}>
                            Police 1: {firstPolice}
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom sx={{
                            textAlign: "left",
                            fontFamily: secondaryPolice === '' ? 'initial' : secondaryPolice
                        }}>
                            Police 2: {secondaryPolice}
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom sx={{
                            textAlign: "left",
                        }}>
                            Couleur 1: 
                            <ColorLensIcon sx={{
                                color: firstColor+' !important',
                            }} />
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom sx={{
                            textAlign: "left",
                        }}>
                            Couleur 2: 
                            <ColorLensIcon sx={{
                                color: secondaryColor+' !important',
                            }} />
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom sx={{
                            textAlign: "left",
                        }}>
                            Couleur 3: 
                            <ColorLensIcon sx={{
                                color: thirdColor+' !important',
                            }} />
                        </Typography>
                    </>
                        }
                    </Grid2>
                    {/* 
                        Bloc qui va lister les fonts avec leurs valeurs et les couleurs avec leurs valeurs
                        en se basant sur une propriété transférée au composant enfant SettingGraphic.js
                        Ex de props setCategory={setCategory}  qui settera comme valeur Fonts ou Colors
                    */}
                    <Grid2 item xs={12} sm={6}>
                        {/* Bouton pour créer et mettre à jour les données en fonction de parameters === parametersList[0] */}
                        <Button variant="contained" color="primary" 
                            sx={{
                                width: '100%',
                                margin: '2%'
                            }} onClick={createNewPersonnalisationGraphique}
                            disabled={idPersonnalisationGraphique !== ''}
                        >Editer {parameters === parametersList[0]?parametersList[0]:parametersList[1] }</Button>
                        <Button variant="contained" color="primary" 
                            sx={{
                                width: '100%',
                                margin: '2%'
                            }} onClick={updatePersonnalisationGraphiqueById}
                            disabled={idPersonnalisationGraphique === ''}
                        >Mettre à jour{parameters === parametersList[0]?parametersList[0]:parametersList[1] }</Button>
                    </Grid2>
                </Grid2>
                </Container>
            </Grid2>
        </Grid2>
    );
};

export default SettingPage;