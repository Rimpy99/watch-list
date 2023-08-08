import { Dispatch, SetStateAction } from 'react';
import { Formik, Field } from 'formik';
import { registerSchema } from '../formSchemas/formSchemas';
import { inputStyles, submitButtonStyles, flexAround, inputErrorMessage } from '../styles/styles';

type FormValuesType = {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

type RegisterFormPropsType = {
    setIsRegisterFormActive: Dispatch<SetStateAction<boolean>>
}

const RegisterForm = ({setIsRegisterFormActive}: RegisterFormPropsType) => {

    const formInitialValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    }

    const handleFormSubmit = async (values: FormValuesType) => {
        const { confirmPassword, ...data } = values;
        
        try{
            const res = await fetch('/auth/register',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                }
            )

            if(res.ok){
                const user = await res.json();
    
                if(user) setIsRegisterFormActive(currentState => !currentState);
            }
        }catch(err){
            alert('An error occured, try again later!')
        }
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
                            className={`${inputStyles} ${(touched.email && errors.email) ? 'border-red-500' : 'border-transparent'}`}
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
                            className={`${inputStyles} ${(touched.name && errors.name) ? 'border-red-500' : 'border-transparent'}`}
                            placeholder="name"
                        />
                        <p className={inputErrorMessage}>{touched.name && errors.name}</p>
                        <Field 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            className={`${inputStyles} ${(touched.password && errors.password) ? 'border-red-500' : 'border-transparent'}`}
                            placeholder="password"
                        />
                        <p className={inputErrorMessage}>{touched.password && errors.password}</p>
                        <Field 
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                            className={`${inputStyles} ${(touched.confirmPassword && errors.confirmPassword) ? 'border-red-500' : 'border-transparent'}`}
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