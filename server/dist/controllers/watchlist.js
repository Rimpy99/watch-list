"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfMovieInWatchList = exports.getMoviesFromWatchlist = exports.removeMovieFromWatchlist = exports.addMovieToWatchlist = void 0;
const userSchema_1 = require("../db_schemas/userSchema");
const addMovieToWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.params;
        const updatedUser = yield userSchema_1.User.updateOne({ _id: userId }, { $push: { watchlist: movieId } });
        res.status(201).json({ updatedUser });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.addMovieToWatchlist = addMovieToWatchlist;
const removeMovieFromWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.params;
        const updatedUser = yield userSchema_1.User.updateOne({ _id: userId }, { $pull: { watchlist: movieId } });
        res.status(200).json({ updatedUser });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.removeMovieFromWatchlist = removeMovieFromWatchlist;
const getMoviesFromWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.params;
        const user = yield userSchema_1.User.findById(userId);
        const watchlist = user === null || user === void 0 ? void 0 : user.watchlist;
        res.status(200).json({ watchlist });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.getMoviesFromWatchlist = getMoviesFromWatchlist;
const checkIfMovieInWatchList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.params;
        const user = yield userSchema_1.User.findById(userId);
        let isMovieInWatchlist = false;
        if (user === null || user === void 0 ? void 0 : user.watchlist.includes(movieId)) {
            isMovieInWatchlist = true;
        }
        res.status(200).json({ isMovieInWatchlist });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.checkIfMovieInWatchList = checkIfMovieInWatchList;
