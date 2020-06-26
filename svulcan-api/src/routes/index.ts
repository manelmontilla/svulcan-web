import { Router } from 'express';
import cors from 'cors'
import IssuesRouter from './Issues';
import UserRouter from './Users';


const options: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: false,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: true
}

// Init router and path
const router = Router();
router.use(cors(options));
// Add sub-routes
router.use('/users', UserRouter);
router.use('/issues', IssuesRouter);
router.options("*", cors(options));
// Export the base-router
export default router;
