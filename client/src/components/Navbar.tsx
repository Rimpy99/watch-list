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
        <>
            {
                windowSize >= 768 
                ? 
                <div className={`${flexBetween} w-full px-10 py-5 backdrop-blur bg-black/30 text-white sticky top-0`}>
                    <div className={`${flexBetween}`}>
                        <Link to='/home' className="hover:text-gray-300">MOVIES</Link>
                        <Link to='/watchlist' className='mx-7 hover:text-gray-300'>WATCHLIST</Link>
                    </div>
                    <button className="hover:text-gray-300">Sign out</button>
                </div>
                :
                <div className={`${flexBetween} w-full px-3 py-4 backdrop-blur bg-black/30 text-white text-sm sticky top-0`}>
                    <Link to='/home' className={`hover:text-gray-300 ${responsiveNavbarLinks}`}>MOVIES</Link>
                    <Link to='/watchlist' className={`hover:text-gray-300 ${responsiveNavbarLinks}`}>WATCHLIST</Link>
                    <button className={`hover:text-gray-300 ${responsiveNavbarLinks}`}>SIGN OUT</button>
                </div>
            }
        </>
    )
};

function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
};

export default Navbar;
