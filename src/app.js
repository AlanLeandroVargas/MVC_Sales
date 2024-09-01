import express from 'express';
import MongoDB from './Config/MongoDB.js';
import ClientRouter from './Routers/ClientRouter.js';
import passport from './Config/Passport.js';

MongoDB();
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/api', ClientRouter);
export default app;