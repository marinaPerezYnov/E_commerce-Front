import React from 'react';
import { Container } from '@mui/material';
import Form from '../../Components/Form';

const RegisterPage = () => {

    return (
        <Container component="main" maxWidth="xs">
            <Form title="Register" buttonText="Register" />
        </Container>
    );
};

export default RegisterPage;