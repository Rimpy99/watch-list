import { Dispatch, SetStateAction, useEffect, useCallback } from "react";
import { confirmationButtons, flexAround, flexCenter } from "../styles/styles";
import { useAppDispatch } from "../redux/reduxHooks";
import { useNavigate } from "react-router";
import { setDefaultUser } from '../redux/slices/userSlice';

type SignOutConfirmationPropsType = {
    setIsSingOutModalActive: Dispatch<SetStateAction<boolean>>
}

type KeyboardEvent = {
    key: string;
  }

const SignOutConfirmation = ({setIsSingOutModalActive}: SignOutConfirmationPropsType) => {

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();

    const signOut = () => {
        setIsSingOutModalActive(false);
        dispatch(setDefaultUser());
        navigate('/');
    }

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key.toUpperCase() === 'ESCAPE') setIsSingOutModalActive(false);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return(
        <div className={`${flexCenter} w-screen h-screen fixed top-0 left-0`}>
            <div 
                className="bg-black w-full h-full absolute top-0 left-0 opacity-50" 
                onClick={() => setIsSingOutModalActive(false)}
            />
            <div className='bg-white z-10 text-black px-5 py-5 rounded'>
                <h2 className="text-black">Are you sure you want to sign out?</h2>
                <div className={`${flexAround} mt-5`}>
                    <button className={`${confirmationButtons}`} onClick={() => signOut()}>Yes</button>
                    <button className={`${confirmationButtons}`} onClick={() => setIsSingOutModalActive(false)}>No</button>
                </div>
            </div>
        </div>
    )
};

export default SignOutConfirmation;