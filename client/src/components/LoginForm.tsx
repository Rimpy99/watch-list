import { Formik, Field } from 'formik';
import { loginSchema } from '../formSchemas/formSchemas';
import { inputStyles, flexAround, submitButtonStyles, inputErrorMessage } from '../styles/styles';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../redux/reduxHooks';
import { setUser } from '../redux/slices/userSlice';

type formValuesType = {
    email: string,
    password: string,
}

const LoginForm = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const formInitialValues = {
        email: '',
        password: '',
    }

    const handleFormSubmit = async (values: formValuesType) => {
        try{
            const res = await fetch('/auth/login', 
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values),
                }
            );

            if (res.ok){
                const user = await res.json();
                if(user) {
                    const userData = {
                        userId: user.userInfo.id,
                        userName: user.userInfo.name,
                        token: user.token,
                    }

                    dispatch(setUser(userData))
                    
                    navigate('/home');
                }
            } else {
                const error = await res.json();
                alert(error.msg);
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
                                className={`${inputStyles} ${(touched.email && errors.email) ? 'border-red-500' : 'border-transparent'}`}
                                placeholder="email"
                        />
                        <p className={inputErrorMessage}>{touched.email && errors.email && 'Email address is required'}</p>
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