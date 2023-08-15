import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { flexCenter } from '../styles/styles';
import { useAppSelector } from '../redux/reduxHooks';
import BarLoader from "react-spinners/BarLoader";

type MovieDetailsType = {
    id: string,
    title: string,
    posterPath: string,
    overview: string,
}

const MovieDetails = () => {

    const { movieId } = useParams();

    const userId = useAppSelector((state) => state.user.userId);
    const userToken = useAppSelector((state) => state.user.token);

    const [ movieDetails, setMovieDetails ] = useState<MovieDetailsType>();

    const [ isErrorWhileLoading, setIsErrorWhileLoading ] = useState<boolean>(false);

    const [ windowSize, setWindowSize ] = useState(getWindowSize());

    //COPIED FROM TMDB DOCUMENTATION
    //GET MOVIE'S DETAILS
    const fetchMovieData = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
            }
        };
          
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const resMovieDetails = {
                    id: response.id,
                    title: response.title,
                    posterPath: response.poster_path,
                    overview: response.overview,
                }

                setMovieDetails(resMovieDetails);
                setIsErrorWhileLoading(false)
            })
            .catch(err => {
                console.error(err);
                setIsErrorWhileLoading(true);
            });
    }

    //ADDING MOVIE TO WATCHLIST
    const addMovieToWatchlist = async () => {
        try{
            const res = await fetch(`/watchlist/add/${userId}/${movieDetails?.id}`, {
                method: 'POST',
                // headers: { Authorization: `Bearer ${userToken}` },
            });

            const userData = await res.json();
            
            console.log(userData)
        }catch(err){
            alert('An error occured while trying to add movie to watchlist!')
        }
    }

    useEffect(() => {
        fetchMovieData();
    }, []);

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    if(!movieDetails){
        if(isErrorWhileLoading) {
            return (
                <div className="min-h-[80vh]">
                    <h3 className="text-center py-10">Couldn't get any data!</h3>
                </div>
            )
        }

        return(
            <div className={`min-h-[80vh] ${flexCenter}`}>
                <BarLoader color={'#e0e0e0'}/>
            </div>
        )
    }

    return(
        <div className={`${flexCenter} w-full py-20`}>
            <div className={`${flexCenter} ${windowSize < 900 && 'flex-col'} lg:mx-20`}>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${movieDetails.posterPath}`} 
                    alt={`${movieDetails.title} - poster`} 
                    className='w-64 px-5'
                />
                <div className='px-5'>
                    <h1 className='pt-5 text-4xl font-bold'>{movieDetails.title}</h1>
                    <button 
                        className='my-5 py-3 px-4 rounded bg-violet-500 hover:bg-violet-700'
                        onClick={() => addMovieToWatchlist()}
                    >
                        ADD TO WATCHLIST
                    </button>
                    <p className='text-base sm:text-xl text-justify sm:text-start'>{movieDetails.overview}</p>
                </div>
            </div>
        </div>
    )
}

function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
};

export default MovieDetails;