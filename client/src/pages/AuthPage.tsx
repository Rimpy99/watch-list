import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import { flexCenter, flexAround, flexStart } from "../styles/styles";

const AuthPage = () => {
    const [ isRegisterFormActive, setIsRegisterFormActive ] = useState<boolean>(true);

    return(
        <div className={`${flexCenter} w-full h-screen`}>
            <div className={`
                ${flexStart}  
                flex-col 
                py-10 
                text-neutral-900 
                bg-gray-200 
                border-4 
                border-white-200 
                rounded-lg 
                h-full
                w-full
                overflow-y-auto
                md:h-4/5 
                md:max-h-min 
                md:w-4/5
                md:max-w-md 
            `}>
                <h2 className="text-gray-500 m-2">{ isRegisterFormActive ? "SIGN UP" : "SIGN IN" }</h2>
                { isRegisterFormActive ? <RegisterForm setIsRegisterFormActive={setIsRegisterFormActive}/> : <LoginForm /> }
                <button 
                    onClick={() => setIsRegisterFormActive(currentState => !currentState)}
                    className="border-b-2 border-gray-500 text-gray-500"
                >
                        { isRegisterFormActive ? "Do you already have an account?" : "You don't have an account yet?" }
                </button>
            </div>
        </div>
    );
};

export default AuthPage;