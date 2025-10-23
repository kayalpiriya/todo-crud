import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import todoRoutes from './Routes/todoRoutes.js'

const app = express();

app.use(cors({
    
}));

app.use(express.json());


app.use("/todos", todoRoutes)

app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/')
        .then(() => console.log("DB connected"))
        .catch(err => console.log(err));


    console.log('server is running on http://localhost:3000/')
})

