import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const HomePage = () => {

    const [ currentPage, setCurrentPage ] = useState<number>(1);

    return(
        <>
            <MoviesList currentPage={currentPage}/>
            <div>
                <div>
                    <button disabled={currentPage === 1 && true} onClick={() => setCurrentPage(currentState => currentState - 1)}>{'<'}</button>
                    <button onClick={() => setCurrentPage(1)} className={`${currentPage === 1 ? 'text-red-500' : 'text-white'}`}>1</button>
                    <button onClick={() => setCurrentPage(2)} className={`${currentPage === 2 ? 'text-red-500' : 'text-white'}`}>2</button>
                    <button onClick={() => setCurrentPage(3)} className={`${currentPage === 3 ? 'text-red-500' : 'text-white'}`}>3</button>
                    <button disabled={currentPage === 3 && true} onClick={() => setCurrentPage(currentState => currentState + 1)}>{'>'}</button>
                </div>
            </div>
        </>
    )
};

export default HomePage;