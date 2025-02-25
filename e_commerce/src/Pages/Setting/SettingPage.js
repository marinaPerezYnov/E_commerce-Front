import React, { useEffect, useState } from 'react';
import { FormGroup, Grid2, Switch, Typography, FormControlLabel, Button, Container } from '@mui/material';
import SettingAccount from '../../Components/SettingAccount';
import SettingGraphic from '../../Components/SettingGraphic';
import { 
    createPersonnalisationGraphique, //createPersonnalisationGraphique(data)
    updatePersonnalisationGraphique, //updatePersonnalisationGraphique(id, data)
    getPersonnalisationGraphiqueByOwnerId, //getPersonnalisationGraphiqueByOwnerId(ownerId)
    deletePersonnalisationGraphique, //deletePersonnalisationGraphique(id)
} from './../../Requests_API/Personnalisation_Graphic';

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

    /* Graphic */
    const [idPersonnalisationGraphique, setIdPersonnalisationGraphique] = React.useState('');
    /** Fonts **/
    const [firstPolice, setFirstPolice] = React.useState('');
    const [secondaryPolice, setSecondaryPolice] = React.useState('');

    /** Colors **/
    const [firstColor, setFirstColor] = React.useState('');
    const [secondaryColor, setSecondaryColor] = React.useState('');
    const [thirdColor, setThirdColor] = React.useState('');

    useEffect(() => {
        /* Mise à jour des valeurs dans les inputs */
        getPersonnalisationGraphiqueByOwnerId(sessionStorage.getItem('ownerId'))
        .then((response) => {
            /*
                Enregistrement de l'id de la personnalisation graphique pour la fournir dans les requêtes
                 de mise à jour et de suppression de réservation graphique 
            */
            setIdPersonnalisationGraphique(response[0]._id);
            if(response.length > 0) {
                setFirstPolice(response[0].firstPolice);
                setSecondaryPolice(response[0].secondaryPolice);
                setFirstColor(response[0].firstColor);
                setSecondaryColor(response[0].secondaryColor);
                setThirdColor(response[0].thirdColor);
            }
        })
        .catch((error) => {
            if(error.response.status === 404) {
                console.log("Not found");
            }
        });
        
    }, []);

    const createNewPersonnalisationGraphique = () => {
        createPersonnalisationGraphique({
            ownId: sessionStorage.getItem('ownerId'),
            firstPolice,
            secondaryPolice,
            firstColor,
            secondaryColor,
            thirdColor
        });
    };

    const updatePersonnalisationGraphiqueById = (id) => {
                /* 
            Verification de la mise à jour de la personnalisation graphic 
            et de l'appel de fonction d'execution de requête update 
        */
       if( firstPolice !== '' && secondaryPolice !== '' && firstColor !== '' && secondaryColor !== '' && thirdColor !== '') {
            updatePersonnalisationGraphique(id, {
                firstPolice,
                secondaryPolice,
                firstColor,
                secondaryColor,
                thirdColor
            });
        }
    };

    const deletePersonnalisationGraphiqueById = (id) => {
        if(id !== '') {
            deletePersonnalisationGraphique(id);
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
                    {/* Bouton pour créer et mettre à jour les données en fonction de parameters === parametersList[0] */}
                    <Button variant="contained" color="primary" sx={{
                        width: '100%',
                        margin: '2%'
                    }} onClick={createNewPersonnalisationGraphique}>Editer {parameters === parametersList[0]?parametersList[0]:parametersList[1] }</Button>
                    <Button variant="contained" color="primary" sx={{
                        width: '100%',
                        margin: '2%'
                    }} onClick={updatePersonnalisationGraphiqueById}>Mettre à jour{parameters === parametersList[0]?parametersList[0]:parametersList[1] }</Button>
                </Grid2>
                </Container>
            </Grid2>
        </Grid2>
    );
};

export default SettingPage;