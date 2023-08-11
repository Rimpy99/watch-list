import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { flexCenter, moviesListButtons } from "../styles/styles";

const HomePage = () => {

    const [ currentPage, setCurrentPage ] = useState<number>(1);

    return(
        <div>
            <MoviesList currentPage={currentPage}/>
            <div className={`w-full ${flexCenter}`}>
                <div>
                    <button 
                        disabled={currentPage === 1 && true} 
                        onClick={() => setCurrentPage(currentState => currentState - 1)}
                        className={`${moviesListButtons} text-white disabled:text-gray-300`}
                    >
                        {'<'}
                    </button>
                    <button 
                        onClick={() => setCurrentPage(1)} 
                        className={`${currentPage === 1 ? 'text-red-500' : 'text-white'} ${moviesListButtons}`}
                    >
                        1
                    </button>
                    <button 
                        onClick={() => setCurrentPage(2)} 
                        className={`${currentPage === 2 ? 'text-red-500' : 'text-white'} ${moviesListButtons}`}
                    >
                        2
                    </button>
                    <button 
                        onClick={() => setCurrentPage(3)} 
                        className={`${currentPage === 3 ? 'text-red-500' : 'text-white'} ${moviesListButtons}`}
                    >
                        3
                    </button>
                    <button 
                        disabled={currentPage === 3 && true} 
                        onClick={() => setCurrentPage(currentState => currentState + 1)}
                        className={`${moviesListButtons} text-white disabled:text-gray-300`}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;