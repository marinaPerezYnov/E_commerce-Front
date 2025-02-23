import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, FormControl, Link } from '@mui/material';
import { login, register} from './../Requests_API/Auths';
import { emailValidator, passwordValidator } from './../Utils/ValidateInputs/regexvalidation';

const Form = ({title, buttonText, setpopupInformation, setpopupEmail}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const setAuthentificaton = (buttonText) => {
        if(passwordValidator(password) !== true) {
            setpopupEmail(false);
            return setpopupInformation(true);
        }
        if(emailValidator(email) !== true) {
            setpopupInformation(false);
            return setpopupEmail(true);
        }
        buttonText === "Login" ? login(email, password, navigate) : register(email, password, navigate);
        // setpopupInformation(false);
        // setpopupEmail(false);
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
            <Container
                sx={{
                    display: buttonText === 'Login'? 'flex' : 'block',
                    padding: '0 !important',
                    justifyContent: buttonText === 'Login' ? 'space-between' : 'none',
                    alignItems: buttonText === 'Login' ? 'center' : 'initial',
                    margin: '20px 0',
                }}>
                <Button variant="contained" color="primary" sx={{
                    backgroundColor: '#c01515',
                    '&:hover': {
                        backgroundColor: '#c01515',
                    },
                    width: buttonText === 'Login' ? '45%' : '100%',
                }} type="submit" fullWidth onClick={()=>setAuthentificaton(buttonText)}>
                    {buttonText}
                </Button>
                {buttonText === "Login" && (
                    <Link href="#" sx={{
                        color: '#c01515',
                    }} onClick={() => console.log('mot de passe oublié')}>Mot de passe oublié ? </Link>
                )}
            </Container>
        </Container>
    );
};

export default Form;