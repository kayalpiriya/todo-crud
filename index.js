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
    mongoose.connect('mongodb+srv://kayalpiriya_09:kayal2004@kayalpiriya.d4mp54n.mongodb.net/?appName=kayalpiriya')
        .then(() => console.log("DB connected"))
        .catch(err => console.log(err));


    console.log('server is running on https://todo-frontend-nine-ecru.vercel.app/')
})

