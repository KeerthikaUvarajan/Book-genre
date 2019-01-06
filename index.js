const express = require('express');
const app = express();
const genres = [
    {id:1, Name:"Novel"},
    {id:2, Name:"Fiction"},
    {id:3, Name:"Mystery"},
    {id:4, Name:"Fantasy"},
    {id:5, Name:"Romance"},
    {id:6, Name:"Thriller"},
    {id:7, Name:"Children"},
    {id:8, Name:"Young adult"},
    {id:9, Name:"Comic"},
    {id:10, Name:"History"}
];

app.get('/api/genre',(req,res)=>{
    res.send("Please choose the book genre");
});

app.listen(3000,()=>{
    console.log("Listening in port 3000...");
});