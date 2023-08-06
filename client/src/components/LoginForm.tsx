import { Formik, Field } from 'formik';
import { loginSchema } from '../formSchemas/formSchemas';
import { inputStyles, flexAround, submitButtonStyles, inputErrorMessage } from '../styles/styles';

type formValuesType = {
    email: string,
    password: string,
}

const LoginForm = () => {

    const formInitialValues = {
        email: '',
        password: '',
    }

    const handleFormSubmit = (values: formValuesType) => {
        console.log(values);
    }

    return(
        <>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={formInitialValues}
                validationSchema={loginSchema}
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
                        <p className={inputErrorMessage}>{touched.email && errors.email && 'Email address is required'}</p>
                        <Field 
                                type="text"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={Boolean(touched.password) && Boolean(errors.password)}
                                className={`${inputStyles} ${touched.password && errors.password && 'border-red-500'}`}
                                placeholder="password"
                        />
                        <p className={inputErrorMessage}>{touched.password && errors.password && 'Password is required'}</p>
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

export default LoginForm;