import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const tokenVerification = (req: Request, res: Response, next: NextFunction) => {
    try{
        let token = req.header('Authorization');

        if(!token) return res.status(403).json({ message: "Access denied" });

        if(token.startsWith('Bearer ')) token = token.slice(7, token.length);

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = decoded;

        next();
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
}