const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const {PORT}=5000
const {connectToDatabase}=require('./database/mongo');
const app=express();

app.use(express.json());
app.use(cors());
app.use('/api/list');
app.listen(PORT,()=>{
    console.log("my server is running port"+PORT);
})