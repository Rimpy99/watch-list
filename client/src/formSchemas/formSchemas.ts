import * as Yup from 'yup';

export const registerSchema = Yup.object({
    email: Yup.string().required("required"),
    name: Yup.string().required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), ''], 'Passwords must match'),
});

export const loginSchema = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
});