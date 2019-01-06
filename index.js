const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());  //Using middleware
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

app.get('/api/genres',(req,res)=>{
    res.send("Please choose the book genre");
});

//Handling GET request with Name
app.get('/api/genres/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre){
        res.status(404).send("Error 404!!! The page you requested is not found");
    }
    res.send(genre);
});

//Handling POST request 
app.post('/api/genres',(req,res)=>{
    const schema = {                    //Input validation
        Name:Joi.string().min(5).required()
    }
    const result = Joi.validate(req.body, schema);
    if(!result){
        res.status(400).send(result.error.details.message);
        return;
    }
    const genre = {
        id:genres.length+1,
        Name: req.body.Name
    };
    genres.push(genre);
    res.send(genre);
});
function validateGenre(genre){
    const schema = {
        Name:Joi.string().min(5).required()
    }
    return Joi.validate(genre,schema);
}

//Handling PUT method with Name
app.put('/api/genres/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre){
        res.status(404).send("Error 404!!! The page you requested is not found");
    }
    const {error} = validateGenre(req.body);
    if(error){
        res.status(400).send(error.details.message);
        return;
    }
    genre.Name = req.body.Name;
    res.send(genre);
});

//Handling DELETE method with Name
app.delete('/api/genres/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre){
        res.status(404).send("Error 404!!! The page you requested is not found");
    }
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});

/* - While hosting the webpage I cannot get the port 3000 everytime. Solution for this is by using environment variables
   - Environment variables are set outside the application */
const port = process.env.PORT || 3000; 
app.listen(port,()=>{
    console.log(`Listening in port ${port}...`);
});