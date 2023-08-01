import { useState } from "react";

const AuthPage = () => {
    const [ isRegisterFormActive, setIsRegisterFormActive ] = useState<boolean>(true);


    return(
        <>
            <h2>{ isRegisterFormActive ? "SIGN UP" : "SIGN IN" }</h2>
            <button onClick={() => setIsRegisterFormActive(currentState => !currentState)}>{ isRegisterFormActive ? "Do you already have an account?" : "You don't have an account yet?" }</button>
        </>
    );
};

export default AuthPage;