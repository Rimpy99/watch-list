import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { flexAround, flexCenter } from "../styles/styles";
import MovieCard from "./MovieCard";

type MoviesListPropsType = {
    currentPage: number,
}

type MovieType = {
    id: number,
    title: string,
    posterPath: string,
}

type ResponseMovieType = {
    id: number,
    title: string,
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
        <div className={` grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3`}>
            {
                movies.map((movie) => {
                    return(
                        <MovieCard movie={movie}/>
                    )
                })
            }
        </div>
    )
}

export default MoviesList;