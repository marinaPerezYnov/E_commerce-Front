import React, { useEffect } from 'react';
import { 
    Grid, 
    FormGroup, 
    FormControlLabel, 
    Switch, 
    Radio, 
    RadioGroup, 
    FormControl, 
    Tabs,
    Tab
} from '@mui/material';
import { HexColorPicker } from 'react-colorful';

const ListOfFonts = [
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
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
    const [color, setColor] = React.useState("");
    const [category, setCategory] = React.useState("Fonts");

    const handleChangeCategory = (event, newValue) => {
        setCategory(newValue);
    };

    useEffect(() => {
        if (chooseColor === 'première couleur') {
            setColor(setFirstColor);
        } else if (chooseColor === 'deuxième couleur') {
            setColor(setSecondaryColor);
        } else if (chooseColor === 'troisième couleur') {
            setColor(setThirdColor);
        }
    }, [chooseColor, setFirstColor, setSecondaryColor, setThirdColor]);

    return (
        <Grid container id="ContainerSettings" item xs={12} sm={12} sx={{
            padding: "2%",
            boxShadow: "2px 2px 3px 0px #004580",
            width: "100%",
        }}>
            {/* Sélection "Fonts" ou "Colors" */}
            <Tabs value={category} onChange={handleChangeCategory} aria-label="select setting">
                <Tab label="Fonts" value="Fonts" />
                <Tab label="Colors" value="Colors" />
            </Tabs>
            {category === "Fonts" && (
                <Grid item xs={12} sm={6} id="Fonts">
                    <FormGroup>
                        <FormControlLabel 
                            control={<Switch defaultChecked onChange={() => {
                                if (choosePolice === 'Deuxième font') {
                                    setChoosePolice('Première font');
                                } else {
                                    setChoosePolice('Deuxième font');
                                }
                            }} />} 
                            label={choosePolice} 
                        />
                    </FormGroup>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={ListOfFonts[0]}
                            name="radio-buttons-group"
                            onChange={(e) => {
                                const selectedFont = e.target.value;
                                if (choosePolice !== "Première font") {
                                    setSecondaryPolice(selectedFont);
                                } else {
                                    setFirstPolice(selectedFont);
                                }
                            }}
                        >
                            {ListOfFonts.map((font, index) => (
                                <FormControlLabel key={index} value={font} control={<Radio />} label={font} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}
            {category === "Colors" && (
                <Grid item xs={12} sm={12} id="Colors">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={ListOfColors[0]}
                            name="radio-buttons-group"
                            onChange={(e) => {
                                setChooseColor(e.target.value);
                            }}
                        >
                            {ListOfColors.map((color, index) => (
                                <FormControlLabel key={index} value={color} control={<Radio />} label={color} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <HexColorPicker color={color} onChange={(e) => {
                        setColor(e);
                        switch (chooseColor) {
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
                </Grid>
            )}
        </Grid>
    );
};

export default SettingGraphic;