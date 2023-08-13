import { moviePoster } from "../styles/styles";

type MovieCardPropsType = {
    movie: {
        id: number,
        title: string,
        overview: string,
        posterPath: string,
    }
}

const MovieCard = ({movie}: MovieCardPropsType) => {

    const { id, title, overview, posterPath } = movie;

    return(
        <>
            <img 
                src={`https://image.tmdb.org/t/p/original/${posterPath}`} 
                alt={`${title} - poster`}
                className={`${moviePoster} hover:cursor-pointer`} 
            />
        </>
    )
};

export default MovieCard;