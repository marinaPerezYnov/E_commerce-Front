export const passwordValidator = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (passwordRegex.test(password)) {
        return passwordRegex.test(password);
    } else {
        return;
    }
};

export const emailValidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
        return emailRegex.test(email);
    } else {
        return;
    }
};

export const stringValidator = (string) => {
    const stringRegex = /^[a-zA-Z0-9]+$/;
    if (stringRegex.test(string)) {
        return stringRegex.test(string);
    } else {
        return;
    }
};

export const numberValidator = (number) => {
    const numberRegex = /^[0-9]+$/;
    if (numberRegex.test(number.toString())) {
        return numberRegex.test(number.toString());
    } else {
        return;
    }
};