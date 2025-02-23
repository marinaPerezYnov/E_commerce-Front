import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem } from '@mui/material';

const PasswordFormatPopup = ({ open, handleClose }) => {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Format de mot de passe attendu</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Votre mot de passe doit respecter les critères suivants :
                </DialogContentText>
                <List>
                    <ListItem>Contient au moins un chiffre </ListItem>
                    <ListItem>Contient au moins une lettre minuscule </ListItem>
                    <ListItem>Contient au moins une lettre majuscule </ListItem>
                    <ListItem>A une longueur comprise entre 8 et 20 caractères</ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PasswordFormatPopup;