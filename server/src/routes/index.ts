import { problem } from '../api/problem.js';
import { AppRoutes } from '../types/index.js';

const routes: AppRoutes[] = [
    {path: '/problems', methods: ["GET", "POST"], handler: problem},
    {path: '/problems/:category', methods: ["GET"], handler: problem},
]

export default routes;