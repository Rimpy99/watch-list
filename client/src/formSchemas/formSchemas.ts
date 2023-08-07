import * as Yup from 'yup';

export const registerSchema = Yup.object({
    email: Yup.string().required("required").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    name: Yup.string().required("Name is required").min(3, 'Name must be at least 3 characters long').matches(/^[A-Za-z][A-Za-z0-9_]{2,29}$/, 'Name can only contain letters and numbers'),
    password: Yup.string().required("Password is required").min(8, 'Password must be at least 8 characters long').matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, 'Password must containt: uppercase and lowercase letters, special characters, digits'),
    // password: Yup.string().required("Password is required").min(8, 'Password must be at least 8 characters long').minLowercase(1)
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match'),
});

export const loginSchema = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
});