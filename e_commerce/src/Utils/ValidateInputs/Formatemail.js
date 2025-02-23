import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem } from '@mui/material';

const EmailFormatPopup = ({ open, handleClose }) => {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Format de l'email attendu</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Votre email doit respecter les critères suivants :
                </DialogContentText>
                <List>
                    <ListItem>Contient des caractères alphanumériques, des points (.), des tirets (-), et des underscores (_) avant le symbole @ </ListItem>
                    <ListItem>Contient un domaine valide après le symbole @, suivi d'un point (.) et d'une extension de 2 à 4 lettres </ListItem>
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

export default EmailFormatPopup;