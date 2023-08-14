import express from 'express';
import { 
    addMovieToWatchlist, 
    removeMovieFromWatchlist, 
    getMoviesFromWatchlist 
} from '../controllers/watchlist';

const router = express.Router();

router.post('/add/:movieId', addMovieToWatchlist);
router.delete('/remove/:movieId', removeMovieFromWatchlist);
router.get('/get/:movieId', getMoviesFromWatchlist);

export default router;