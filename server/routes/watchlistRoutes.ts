import express from 'express';
import { 
    addMovieToWatchlist, 
    removeMovieFromWatchlist, 
    getMoviesFromWatchlist, 
    checkIfMovieInWatchList
} from '../controllers/watchlist';

const router = express.Router();

router.post('/add/:userId/:movieId', addMovieToWatchlist);
router.delete('/remove/:userId/:movieId', removeMovieFromWatchlist);
router.get('/get/:userId/:movieId', getMoviesFromWatchlist);
router.get('/check/:userId/:movieId', checkIfMovieInWatchList);

export default router;