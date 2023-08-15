import { Request, Response } from 'express';
import { User } from '../db_schemas/userSchema';

export const addMovieToWatchlist = async (req: Request, res: Response) => {
    try{
        const { userId, movieId } = req.params;
        
        const updatedUser = await User.updateOne({ _id: userId }, { $push: { watchlist: movieId } });

        res.status(201).json({updatedUser});
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
};

export const removeMovieFromWatchlist = async (req: Request, res: Response) => {
    try{
        const { userId, movieId } = req.params;

        const updatedUser = await User.updateOne({ _id: userId }, { $pull: { watchlist: movieId } });

        res.status(200).json({updatedUser});
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
};

export const getMoviesFromWatchlist = async (req: Request, res: Response) => {
    try{
        const { userId, movieId } = req.params;

        const user = await User.findById(userId);

        const watchlist = user?.watchlist;

        res.status(200).json({watchlist})
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
};

export const checkIfMovieInWatchList = async (req: Request, res: Response) => {
    try{
        const { userId, movieId } = req.params;
    
        const user = await User.findById(userId);

        let isMovieInWatchlist = false;

        if (user?.watchlist.includes(movieId)){
            isMovieInWatchlist = true;
        }

        res.status(200).json({isMovieInWatchlist})
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
};