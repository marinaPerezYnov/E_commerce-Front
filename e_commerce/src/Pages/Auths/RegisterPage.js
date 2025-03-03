import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Form from '../../Components/Form';
import PasswordFormatPopup from './../../Utils/ValidateInputs/Formatpassword';
import EmailFormatPopup from './../../Utils/ValidateInputs/Formatemail';
import './../../Styles/auth.css';

const RegisterPage = () => {
    const [popupInformation, setpopupInformation] = React.useState(false);
    const [popupEmail, setpopupEmail] = React.useState(false);

    const handleClosePasswordInformation = () => {
        console.log("close password information");
        setpopupInformation(false);
    };

    const handleCloseEmailInformation = () => {
        setpopupEmail(false);
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Container className='authPicture'></Container>
            <Container>
                <Form title="Register" buttonText="Register" setpopupInformation={setpopupInformation} setpopupEmail={setpopupEmail} />
                {popupInformation && (
                    <PasswordFormatPopup open={popupInformation} handleClose={handleClosePasswordInformation} />
                )}
                {popupEmail && (
                    <EmailFormatPopup open={popupEmail} handleClose={handleCloseEmailInformation} />
                )}
            </Container>
        </Container>
    );
};

export default RegisterPage;