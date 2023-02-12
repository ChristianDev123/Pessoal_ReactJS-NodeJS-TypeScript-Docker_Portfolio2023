import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});
app.use(cors());
app.use(routes);
app.listen(port,()=>{
    console.log(`
        app is running!
        listening on port ${port}
    `);
})