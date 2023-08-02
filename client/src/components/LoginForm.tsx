import { Formik, Field } from 'formik';
import { loginSchema } from '../formSchemas/formSchemas';

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
                    <form onSubmit={handleSubmit}>
                    <Field 
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                    <Field 
                            type="text"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password} 
                        />
                    <button type="submit">Submit</button>
                </form>
                )}
            </Formik>
        </>
    )
};

export default LoginForm;