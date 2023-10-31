const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
const authRoutes = require("./routes/auth")
const todoRoutes = require("./routes/todo")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/todo", todoRoutes)

app.listen(port, ()=>{
    console.log(`App listening at port ${port}`)
})

mongoose.connect('mongodb+srv://pallavsharma0202:47FZtLTiNozxbfYK@cluster0.sdvxp5u.mongodb.net/',{dbName: 'todo'})
