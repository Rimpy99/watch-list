import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db_schemas/userSchema';

export const register = async (req: Request, res: Response) => {
    try{
        console.log(req.body)
        const { email, name, password } = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            email,
            name,
            password: hashedPassword
        });

        const createdUser = await user.save();

        res.status(201).json(createdUser);
    }catch(err){
        if (err instanceof Error) res.status(500).json({ msg: err });
    }
}

export const login = async (req: Request, res: Response) => {
    try{

        // res.status(200).json()
    }catch(err){
        if (err instanceof Error) res.status(500).json({ msg: err });
    }
}