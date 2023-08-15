import { Request, Response } from 'express';
import { User } from '../db_schemas/userSchema';

export const addMovieToWatchlist = async (req: Request, res: Response) => {
    try{
        const { userId, movieId } = req.params;
        console.log(`${userId}, ${movieId}`)
        
        const updatedUser = await User.updateOne({ _id: userId }, { $push: { watchlist: movieId } });
        console.log(updatedUser)

        res.status(201).json({updatedUser});
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
};

export const removeMovieFromWatchlist = async (req: Request, res: Response) => {

};

export const getMoviesFromWatchlist = async (req: Request, res: Response) => {

};