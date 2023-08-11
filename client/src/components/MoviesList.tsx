import { useEffect, useState } from "react";

type MoviesListPropsType = {
    currentPage: number,
}

type MovieType = {
    id: number,
    title: string,
    posterPath: string,
}

const MoviesList = ({currentPage}: MoviesListPropsType) => {

    const [ movies, setMovies ] = useState<MovieType[] | null>(null);

    //COPIED FROM TMDB DOCUMENTATION
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
    }, []);

    if(!movies){
        return (
            <div className="min-h-[80vh]">
                <h3 className="text-center py-10">Couldn't get any data!</h3>
            </div>
        )
    }

    return(
        <>
        </>
    )
}

export default MoviesList;