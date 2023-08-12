import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { flexCenter } from "../styles/styles";

type MoviesListPropsType = {
    currentPage: number,
}

type MovieType = {
    id: number,
    title: string,
    overview: string,
    posterPath: string,
}

type ResponseMovieType = {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
}

const MoviesList = ({currentPage}: MoviesListPropsType) => {

    const [ movies, setMovies ] = useState<MovieType[] | []>([]);
    const [ isError, setIsError ] = useState<boolean>(false);

    //COPIED FROM TMDB DOCUMENTATION
    const fetchMovies = () => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
            }
          };
          
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options)
        .then(response => response.json())
        .then(response => {
            response.results.map((movie: ResponseMovieType)=> {
                const movieData = {
                    title: movie.title,
                    id: movie.id,
                    posterPath: movie.poster_path,
                    overview: movie.overview,    
                }
                setMovies(currentArray => [...currentArray, movieData]);
                setIsError(false)
            })
        })
        .catch(err => {
            console.error(err)
            setIsError(true)
        });
    }

    useEffect(() => {
        setMovies([]);
        setIsError(false);
        fetchMovies();
    }, [currentPage]);

    if(!movies.length){
        if(isError) {
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
        <>
            {
                movies.map((movie) => {
                    return(
                        <h1>{movie.title}</h1>
                    )
                })
            }
        </>
    )
}

export default MoviesList;