import { Formik, Field } from 'formik';
import { loginSchema } from '../formSchemas/formSchemas';
import { inputStyles, flexAround } from '../styles/styles';

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
                                helperText={touched.email && errors.email}
                                className={inputStyles}
                                placeholder="email"
                            />
                        <Field 
                                type="text"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={Boolean(touched.password) && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                className={inputStyles} 
                                placeholder="password"
                            />
                        <button 
                            type="submit"
                            className="bg-violet-900 text-white py-2 px-3 rounded-lg m-4"
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