import React, { useEffect, useState } from 'react';
import { FormGroup, Grid2, Switch, Typography, FormControlLabel } from '@mui/material';
import SettingAccount from '../../Components/SettingAccount';
import SettingGraphic from '../../Components/SettingGraphic';

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
    /** Fonts **/
    const [firstPolice, setFirstPolice] = React.useState('');
    const [secondaryPolice, setSecondaryPolice] = React.useState('');

    /** Colors **/
    const [firstColor, setFirstColor] = React.useState('');
    const [secondaryColor, setSecondaryColor] = React.useState('');
    const [thirdColor, setThirdColor] = React.useState('');

    useEffect(() => {
        console.log(
            "firstColor : ",
            firstColor, 
            "firstPolice : ",
            firstPolice, 
            "secondaryColor : ",
            secondaryColor, 
            "secondaryPolice : ",
            secondaryPolice, 
            "thirdColor : ",
            thirdColor
        );
    }, [
        firstColor, 
        firstPolice, 
        secondaryColor, 
        secondaryPolice, 
        thirdColor
    ]);

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
                    />
                }
            </Grid2>
        </Grid2>
    );
};

export default SettingPage;