import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db_schemas/userSchema';

export const register = async (req: Request, res: Response) => {
    try{
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
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if(!user){
            res.status(400).json({ msg: "No such user exists." });
            return;
        }

        const isPasswordMatching = await bcrypt.compare(password, user.password);

        if(!isPasswordMatching){
            res.status(401).json({ msg: "Invalid password." });
            return;
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET);

        const userInfo = {
            id: user._id,
            name: user.name
        }

        res.status(200).json({ token, userInfo });
    }catch(err){
        if (err instanceof Error) res.status(500).json({ msg: err });
    }
}