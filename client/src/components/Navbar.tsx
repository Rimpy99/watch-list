import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/reduxHooks";
import { flexBetween } from "../styles/styles";

const Navbar = () => {

    const userName = useAppSelector((state) => state.user.userName);

    return(
        <div className={`${flexBetween} w-full px-10 py-5 backdrop-blur bg-black/30 text-white sticky top-0`}>
            <div className={`${flexBetween}`}>
                <Link to='/home' className="hover:text-gray-300">MOVIES</Link>
                <Link to='/watchlist' className='mx-7 hover:text-gray-300'>WATCHLIST</Link>
            </div>
            <button className="hover:text-gray-300">{userName}</button>
        </div>
    )
};

export default Navbar;