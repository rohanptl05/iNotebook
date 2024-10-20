import mongoose from "mongoose";
import express from "express";
import authRouter from "./routers/auth.js";
import noteRouter from "./routers/notes.js";
import cors from 'cors';

const ConnectToMongo = async () =>{
  try {
 await mongoose.connect("mongodb://localhost:27017/employess");
 console.log("connect To Mongo")
  }catch(error){
    console.error('Error connecting to MongoDB:', error)
  }
  }


ConnectToMongo();
// let a = await
const app = express()
const port = 5000



app.use(cors())



app.use(express.json());


app.use('/api/auth',authRouter)
app.use('/api/notes',noteRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
