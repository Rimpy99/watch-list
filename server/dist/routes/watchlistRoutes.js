"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const watchlist_1 = require("../controllers/watchlist");
const router = express_1.default.Router();
router.post('/add/:userId/:movieId', watchlist_1.addMovieToWatchlist);
router.delete('/remove/:userId/:movieId', watchlist_1.removeMovieFromWatchlist);
router.get('/get/:userId/:movieId', watchlist_1.getMoviesFromWatchlist);
router.get('/check/:userId/:movieId', watchlist_1.checkIfMovieInWatchList);
exports.default = router;
