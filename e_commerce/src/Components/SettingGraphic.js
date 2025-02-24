import React from 'react';
import { Grid2, List, ListItem, FormGroup, FormControlLabel, Switch, Button } from '@mui/material';
import { HexColorPicker } from 'react-colorful';

const ListOfFonts = [
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
];

const ListOfColors = [
    'première couleur',
    'deuxième couleur',
    'troisième couleur',
]

const SettingGraphic = ({
    setFirstPolice, 
    setSecondaryPolice,
    setFirstColor,
    setSecondaryColor,
    setThirdColor
}) => {
    const [choosePolice, setChoosePolice] = React.useState('Première font');
    const [chooseColor, setChooseColor] = React.useState('première couleur');
    const [color, setColor] = React.useState("#aabbcc");
    return (
        <Grid2 item xs={12} sm={12}>
            <Grid2 item xs={12} sm={6}>
                <FormGroup>
                    <FormControlLabel 
                        control={<Switch defaultChecked onChange={()=> {
                            if(choosePolice === 'Deuxième font') {
                                setChoosePolice('Première font');
                            } else {
                            setChoosePolice('Deuxième font');
                            }
                        }} />} 
                        label={choosePolice} 
                    />
                </FormGroup>
                <List>
                    {ListOfFonts.map((font, index) => (
                        choosePolice !== "Première font" ? 
                        <ListItem key={index} onClick={(e)=> setFirstPolice(font)}>{font}</ListItem>
                        :
                        <ListItem key={index} onClick={(e)=> setSecondaryPolice(font)}>{font}</ListItem>
                    ))}
                </List>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
                {ListOfColors.map((color, index) => (
                    <Grid2 item xs={4} sm={4} key={index}>
                        <Button onClick={()=>{
                            setChooseColor(color);
                        }}> Sélectionnez votre {color}</Button>
                    </Grid2>
                ))}

                <HexColorPicker color={color} onChange={(e) => {
                    switch(chooseColor) {
                        case "première couleur":
                            setFirstColor(e);
                            break;
                        case "deuxième couleur":
                            setSecondaryColor(e);
                            break;
                        case "troisième couleur":
                            setThirdColor(e);
                            break;
                        default:
                            break;
                    }
                }} />
                <p>Selected color: {color}</p>
            </Grid2>
        </Grid2>
    )
};

export default SettingGraphic;