import { useEffect, useState } from "react";
import { JsxEmit } from "typescript";

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
                        id: movie.id,
                        title: movie.title,
                        overview: movie.overview,
                        posterPath: movie.poster_path,
                    }

                    setMovies(currentArray => [...currentArray, movieData]);
                    // console.log(movieData)
                })
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        setMovies([]);
        fetchMovies();
    }, [currentPage]);

    if(!movies.length){
        return (
            <div className="min-h-[80vh]">
                <h3 className="text-center py-10">Couldn't get any data!</h3>
            </div>
        )
    }

    return(
        <>
            <h1>{currentPage}</h1>
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