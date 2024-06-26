import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import foodRouter from './src/router/food-router'
import userRouter from './src/router/user-router'
import orderRouter from './src/router/order-router'
import {dbConnect} from './src/configs/database.config';
dotenv.config();

dbConnect()

const app = express();
app.use(express.json());

//connect frontend 
app.use(cors({
    credentials:true,
    origin:["https://foodmine-seven.vercel.app"]
    // origin:["http://localhost:4200"]
}))

//foods Router couple of Api    
app.use('/api/foods', foodRouter)

//user Router Couple of Api
app.use('/api/users',userRouter)

//order Router Of Api
app.use('/api/orders',orderRouter)

// Backend is Direct Redirect to '/'
app.get('/',(req,res)=>{
   res.send("hello");
})


const port = 5000;
app.listen(port,()=>{
    console.log("welcome server is run on http:/localhost:",+port);
})
