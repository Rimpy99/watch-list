import { Formik, Field } from 'formik';
import { registerSchema } from '../formSchemas/formSchemas';
import { inputStyles, flexAround } from '../styles/styles';

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
                            className={inputStyles}
                            placeholder="email"
                        />
                        <p>{touched.email && errors.email && 'REQUIRED'}</p>
                        <Field 
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={Boolean(touched.name) && Boolean(errors.name)}
                            helperText={touched.name && errors.name} 
                            className={inputStyles}
                            placeholder="name"
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
                        <Field 
                            type="text"
                            name="confirmPassoword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword} 
                            className={inputStyles}
                            placeholder="confirm password"
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

export default RegisterForm;