import React, { useEffect } from 'react';
import { 
    Grid2, 
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
    const [color, setColor] = React.useState("#aabbcc");
    const [category, setCategory] = React.useState("Fonts");

    const handleChangeCategory = (e) => {
        setCategory(e.target.innerText);
    };

    useEffect(() => {
        if(category === "FONTS") {
            document.getElementById("Fonts").style.display = "block";
            document.getElementById("Colors").style.display = "none";
        }
        if(category === "COLORS") {
            document.getElementById("Fonts").style.display = "none";
            document.getElementById("Colors").style.display = "flex";
        }
    }, [category]);

    return (
        <Grid2 id="ContainerSettings" item xs={12} sm={12} sx={{
            padding: "2%",
            boxShadow: "2px 2px 3px 0px #004580",
            width: "100%",
        }}>
            {/* Sélection "Fonts" ou "Colors */}
            <Tabs value={category} onChange={(e)=>handleChangeCategory(e)} aria-label="select setting">
                <Tab label="Fonts" />
                <Tab label="Colors" />
            </Tabs>
            <Grid2 id="Fonts" item xs={12} sm={6}>
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
            </Grid2>
            <Grid2 id="Colors" item xs={12} sm={12}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={ListOfFonts[0]}
                        name="radio-buttons-group"
                    >
                        {ListOfColors.map((color, index) => (
                            <FormControlLabel onClick={()=>{
                                setChooseColor(color);
                            }} value={color} control={<Radio />} label={color} />
                        ))}
                    </RadioGroup>
                </FormControl>

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
        </Grid2>
    </Grid2>
    )
};

export default SettingGraphic;