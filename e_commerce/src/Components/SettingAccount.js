import React from 'react';
import { Button, Divider, Grid2, List, ListItem, TextField } from '@mui/material';

/** 
 * Implémenter le système de réinitialisation de mot de passe
 * de modification d'email
 * de suppression de compte
 * **/
const SettingAccount = ({setEditEmail, setOldPassword, setReinitializePassword}) => {
    const handleDeleteAccount = () => {
        console.log("delete account");
    }

    const updateUserParameters = () => {
        console.log("update user parameters");
    }

    return (
        <Grid2 item xs={12} sm={6} sx={{
            padding: "5%",
            boxShadow: "2px 2px 3px 0px #004580",
            marginTop: "2%",
        }}>
            <List>
                <ListItem sx={{
                    paddingLeft: '0 !important',
                }}>Réinitialiser le mot de passe</ListItem>
                <TextField sx={{
                    width: '100%',
                }} label="Ancien mot de passe" type="password" onChange={(e) => setOldPassword(e.target.value)}/>
                <TextField sx={{
                    width: '100%',
                }} label="Nouveau mot de passe" type="password" onChange={(e) => setReinitializePassword(e.target.value)}/>
                <ListItem sx={{
                    paddingLeft: '0 !important',
                }}>Modifier l'email</ListItem>
                <TextField label="Nouvel email" sx={{
                    width: '100%',
                }} onChange={(e) => setEditEmail(e.target.value) } type="email" />
                <Divider sx={{
                    margin: "5% 0",
                }} />
                <Button variant="contained" sx={{
                    width: '100%',
                }} onClick={handleDeleteAccount} color="secondary">Supprimer son compte </Button>
            </List>
            <Button variant="contained" color="primary" sx={{
                width: '100%',
            }} onClick={updateUserParameters}>Valider les modifications</Button>
        </Grid2>
    );
};

export default SettingAccount;