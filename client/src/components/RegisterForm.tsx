import { Formik, Field } from 'formik';
import { registerSchema } from '../formSchemas/formSchemas';
import { inputStyles, submitButtonStyles, flexAround, inputErrorMessage } from '../styles/styles';

type formValuesType = {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

const RegisterForm = () => {

    const formInitialValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    }

    const handleFormSubmit = (values: formValuesType) => {
        console.log(values);
    }

    return(
        <>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={formInitialValues}
                validationSchema={registerSchema}
            >
                {({handleChange, handleSubmit, handleBlur, values, touched, errors}) => (
                    <form 
                        onSubmit={handleSubmit}
                        className={`${flexAround} flex-col`}
                    >
                        <Field 
                            type="text"
                            name="email"
                            label="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            className={`${inputStyles} ${touched.email && errors.email && 'border-red-500'}`}
                            placeholder="email"
                        />
                        <p className={inputErrorMessage}>{touched.email && errors.email && 'Valid email address is required'}</p>
                        <Field 
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={Boolean(touched.name) && Boolean(errors.name)}
                            className={`${inputStyles} ${touched.name && errors.name && 'border-red-500'}`}
                            placeholder="name"
                        />
                        <p className={inputErrorMessage}>{touched.name && errors.name && "Valid name is required"}</p>
                        <Field 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            className={`${inputStyles} ${touched.password && errors.password && 'border-red-500'}`}
                            placeholder="password"
                        />
                        <p className={inputErrorMessage}>{touched.password && errors.password && "Password is required"}</p>
                        <Field 
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                            className={`${inputStyles} ${touched.confirmPassword && errors.confirmPassword && 'border-red-500'}`}
                            placeholder="confirm password"
                        />
                        <p className={inputErrorMessage}>{touched.confirmPassword && errors.confirmPassword && "Passwords must match"}</p>
                        <button 
                            type="submit"
                            className={submitButtonStyles}
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>  
        </>
    )
};

export default RegisterForm;