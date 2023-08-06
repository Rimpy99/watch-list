import * as Yup from 'yup';

export const registerSchema = Yup.object({
    // email: Yup.string().required("required").transform((value, originalValue) => (/\s/.test(originalValue) ? NaN : value)),
    email: Yup.string().required("required").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    name: Yup.string().required("required").matches(/^[A-Za-z][A-Za-z0-9_]{2,29}$/),
    password: Yup.string().required("required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
    confirmPassword: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), ''], 'Passwords must match').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

export const loginSchema = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
});