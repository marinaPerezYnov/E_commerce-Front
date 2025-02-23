import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, FormControl } from '@mui/material';
import { login, register} from './../Requests_API/Auths';

const Form = ({title, buttonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const setAuthentificaton = (buttonText) => {
        buttonText === "Login" ? login(email, password, navigate) : register(email, password, navigate);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            <FormControl margin="normal" fullWidth required>
                <TextField
                    label="Email"
                    type={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl margin="normal" fullWidth required>
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <Button variant="contained" color="primary" type="submit" fullWidth onClick={()=>setAuthentificaton(buttonText)}>
                {buttonText}
            </Button>
        </Container>
    );
};

export default Form;