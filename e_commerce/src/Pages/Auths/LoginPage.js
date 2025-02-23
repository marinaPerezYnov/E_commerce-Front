import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import Form from './../../Components/Form';
import PasswordFormatPopup from './../../Utils/ValidateInputs/Formatpassword';
import EmailFormatPopup from './../../Utils/ValidateInputs/Formatemail';
import './../../Styles/auth.css';

const LoginPage = () => {
    const [popupInformation, setpopupInformation] = React.useState(false);
    const [popupEmail, setpopupEmail] = React.useState(false);

    useEffect(() => {
        console.log(popupInformation);
    }, [popupInformation]);

    const handleClose = () => {
        setpopupInformation(false);
        setpopupEmail(false);
    };


    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Container className='authPicture'></Container>
            <Container>
                <Form title={"Login"} buttonText={"Login"} setpopupInformation={setpopupInformation} setpopupEmail={setpopupEmail} />
                {popupInformation && (
                    <PasswordFormatPopup open={popupInformation} handleClose={handleClose} />
                )}
                {popupEmail && (
                    <EmailFormatPopup open={popupEmail} handleClose={handleClose} />
                )}

            </Container>
        </Container>
    );
};

export default LoginPage;