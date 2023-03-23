import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import connection from './connection/config.js';

const app = express();
const port = process.env.PORT || 5000; 

connection();
app.use(express.urlencoded({ extended: true, },),);
app.use(express.json());
app.use(cors());

userRoutes(app)
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})