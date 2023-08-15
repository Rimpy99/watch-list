import express from 'express';
import { 
    addMovieToWatchlist, 
    removeMovieFromWatchlist, 
    getMoviesFromWatchlist 
} from '../controllers/watchlist';

const router = express.Router();

router.post('/add/:userId/:movieId', addMovieToWatchlist);
router.delete('/remove/:userId/:movieId', removeMovieFromWatchlist);
router.get('/get/:userId/:movieId', getMoviesFromWatchlist);

export default router;