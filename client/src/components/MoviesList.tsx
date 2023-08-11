import { useEffect } from "react";

type MoviesListPropsType = {
    currentPage: number,
}

const MoviesList = ({currentPage}: MoviesListPropsType) => {

    const fetchMovies = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return(
        <>
        </>
    )
}

export default MoviesList;