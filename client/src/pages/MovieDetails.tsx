import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { flexCenter } from '../styles/styles';

type MovieDetailsType = {
    id: string,
    title: string,
    posterPath: string,
    overview: string,
}

const MovieDetails = () => {

    const { id } = useParams();

    const [ movieDetails, setMovieDetails ] = useState<MovieDetailsType>();

    const [ windowSize, setWindowSize ] = useState(getWindowSize());

    //COPIED FROM TMDB DOCUMENTATION
    const fetchMovieData = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
            }
        };
          
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                const resMovieDetails = {
                    id: response.id,
                    title: response.title,
                    posterPath: response.poster_path,
                    overview: response.overview,
                }

                setMovieDetails(resMovieDetails);
            })
            .catch(err => console.error(err));
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

    if(!movieDetails) return <h1>Couldn't get any data!</h1>

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
                    <button className='my-5 py-3 px-4 rounded bg-violet-500 hover:bg-violet-700'>ADD TO WATCHLIST</button>
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