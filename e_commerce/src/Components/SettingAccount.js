import React from 'react';
import { Button, Grid2, List, ListItem, TextField } from '@mui/material';

const SettingAccount = ({setEditEmail, setOldPassword, setReinitializePassword}) => {
    const handleDeleteAccount = () => {
        console.log("delete account");
    }

    const updateUserParameters = () => {
        console.log("update user parameters");
    }

    return (
        <Grid2 item xs={12} sm={6}>
            <List>
                <ListItem sx={{
                    paddingLeft: '0 !important',
                }}>réinitialiser mot de passe</ListItem>
                <TextField label="Ancien mot de passe" type="password" onChange={(e) => setOldPassword(e.target.value)}/>
                <TextField label="Nouveau mot de passe" type="password" onChange={(e) => setReinitializePassword(e.target.value)}/>
                <ListItem sx={{
                    paddingLeft: '0 !important',
                }}>modifier email</ListItem>
                <TextField label="Nouvel email" sx={{
                    width: '100%',
                }} onChange={(e) => setEditEmail(e.target.value) } type="email" />
                <ListItem sx={{
                    paddingLeft: '0 !important',
                }}>supprimer compte</ListItem>
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