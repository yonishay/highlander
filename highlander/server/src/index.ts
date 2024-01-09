// src/index.ts
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import goalRoutes from './routes/goalRoutes';



const app = express();
app.use(helmet()); 
app.use(cors());
app.use(express.json());

// Use the goal routes
app.use('/api/goals', goalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
