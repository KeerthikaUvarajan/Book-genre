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

/* - While hosting the webpage I cannot get the port 3000 everytime. Solution for this is by using environment             variables
   - Environment variables are set outside the application */
const port = process.env.PORT || 3000; 
app.listen(port,()=>{
    console.log(`Listening in port ${port}...`);
});