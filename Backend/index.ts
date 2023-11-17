import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todo.js';

const app = express();
const port = 3000;

// ... rest of your express app setup ...


app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/todo", todoRoutes)

app.listen(port, ()=>{
    console.log(`App listening at port ${port}`)
})

mongoose.connect('mongodb+srv://pallavsharma0202:47FZtLTiNozxbfYK@cluster0.sdvxp5u.mongodb.net/',{dbName: 'todo'})
