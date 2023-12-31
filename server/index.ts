import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import watchlistRoutes from './routes/watchlistRoutes';
import { tokenVerification } from './middleware/tokenVerification';

const app = express();
app.use(express.json())
dotenv.config();
app.use(helmet());

const PORT = process.env.PORT;
const DB_LINK = process.env.DB_LINK;

app.use('/auth', authRoutes);
app.use('/watchlist', tokenVerification, watchlistRoutes);

mongoose.connect(DB_LINK).then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    });
}).catch((err) => console.log(err));