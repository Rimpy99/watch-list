import { moviePoster } from "../styles/styles";
import { Link } from "react-router-dom";

type MovieCardPropsType = {
    movie: {
        id: number,
        title: string,
        posterPath: string,
    }
}

const MovieCard = ({movie}: MovieCardPropsType) => {

    const { id, title, posterPath } = movie;

    return(
        <> 
            <Link to={`/movie/${id}`}>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${posterPath}`} 
                    alt={`${title} - poster`}
                    className={`${moviePoster} hover:cursor-pointer`} 
                />
            </Link>
        </>
    )
};

export default MovieCard;