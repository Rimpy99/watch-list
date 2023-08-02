import { Formik, Field } from 'formik';
import { registerSchema } from '../formSchemas/formSchemas';

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
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={Boolean(touched.name) && Boolean(errors.name)}
                            helperText={touched.name && errors.name} 
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
                        <Field 
                            type="text"
                            name="confirmPassoword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword} 
                        />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>  
        </>
    )
};

export default RegisterForm;