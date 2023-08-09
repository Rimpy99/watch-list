import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/reduxHooks";
import { flexBetween, responsiveNavbarLinks } from "../styles/styles";

const Navbar = () => {

    const [ windowSize, setWindowSize ] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    return(
        <div className={`${flexBetween} w-full ${windowSize >= 768 ? 'px-10 py-5' : 'px-3 py-4 text-sm'} backdrop-blur bg-black/30 text-white sticky top-0`}>
            {
                windowSize >= 768 
                ? 
                    <div className={`${flexBetween}`}>
                        <Link to='/home' className="hover:text-gray-300">MOVIES</Link>
                        <Link to='/watchlist' className='mx-7 hover:text-gray-300'>WATCHLIST</Link>
                    </div>
                :
                    <>
                        <Link to='/home' className={`hover:text-gray-300 ${responsiveNavbarLinks}`}>MOVIES</Link>
                        <Link to='/watchlist' className={`hover:text-gray-300 ${responsiveNavbarLinks}`}>WATCHLIST</Link>
                    </>
            }
            <button className={`hover:text-gray-300 ${windowSize < 768 && responsiveNavbarLinks}`}>Sign out</button>
            {/* <SignOutConfirmation /> */}
        </div>
    )
};

function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
};

export default Navbar;
