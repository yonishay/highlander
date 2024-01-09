import express, { Request, Response } from 'express';
import * as turf from '@turf/turf';

const router = express.Router();

// Generate random goal position
router.get('/generateGoal', (req: Request, res: Response) => {
    // Assuming current position is provided in query params
    const currentLat = parseFloat(req.query.currentLat as string);
    const currentLng = parseFloat(req.query.currentLng as string);

    
    const radius = 1; // in km

    // Generate a random point within the radius
    const randomPoint = turf.randomPosition([currentLng - 0.01, currentLat - 0.01, currentLng + 0.01, currentLat + 0.01]);
    const goal = turf.point(randomPoint);

    res.json({ lat: goal.geometry.coordinates[1], lng: goal.geometry.coordinates[0] });
});

// Check if we have goal
router.get('/checkGoal', (req: Request, res: Response) => {
    const ballLat = parseFloat(req.query.ballLat as string);
    const ballLng = parseFloat(req.query.ballLng as string);
    const goalLat = parseFloat(req.query.goalLat as string);
    const goalLng = parseFloat(req.query.goalLng as string);

    const ballPosition = turf.point([ballLng, ballLat]);
    const goalPosition = turf.point([goalLng, goalLat]);

    const distance = turf.distance(ballPosition, goalPosition, { units: 'meters' });

    res.json({ reachedGoal: distance <= 10 });
});

export default router;
