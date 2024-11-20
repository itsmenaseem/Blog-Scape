import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDb from './config/db.config.js';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js'; // Fixed typo: `postRouts` to `postRoutes`
import { userMiddleware } from './middleware/user.middleware.js';
import path from 'path';

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:5173', // Set your frontend's URL
    credentials: true, // Allow credentials (cookies, headers)
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const __dirname = path.resolve();

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userMiddleware, userRoutes);
app.use('/api/v1/posts', postRoutes); // Fixed typo: `postRouts` to `postRoutes`

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Catch-all route to handle SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    connectToDb(); // Ensure database connection is made after starting the server
});