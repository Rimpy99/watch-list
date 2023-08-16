import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moviePoster } from "../styles/styles";

type WatchlistCardPropsType = {
    movieId: string,
}

type MovieDetailsType = {
    id: string,
    title: string,
    posterPath: string,
}

const WatchlistCard = ({movieId}: WatchlistCardPropsType) => {

    const [ movieDetails, setMovieDetails ] = useState<MovieDetailsType | null>();
    const [ isError, setIsError ] = useState<boolean>(false);

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
                const movieDetails = {
                    id: response.id,
                    title: response.title,
                    posterPath: response.poster_path,
                }

                setMovieDetails(movieDetails);
            })
            .catch(err => {
                console.error(err);
                setIsError(true);
            });
    }

    useEffect(() => {
        fetchMovieData()
    }, [])

    return(
        <>
            {!isError && movieDetails &&
                <Link to={`/movie/${movieId}`}>
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${movieDetails.posterPath}`} 
                        alt={`${movieDetails.title} - poster`}
                        className={`${moviePoster} hover:cursor-pointer`} 
                    />
                </Link>
            }
        </>
    )
};

export default WatchlistCard;