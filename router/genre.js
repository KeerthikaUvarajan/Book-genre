const express = require('express');
const router = express.Router();
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
router.get('/api/genres',(req,res)=>{
    res.send("Please choose the book genre");
});

//Handling GET request with Name
router.get('/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre) return res.status(404).send("Error 404!!! The page you requested is not found");    
    res.send(genre);
});
//Handling POST request 
router.post('/',(req,res)=>{
    const schema = {                    //Input validation
        Name:Joi.string().min(5).required()
    }
    const result = Joi.validate(req.body, schema);
    if(!result) return res.status(400).send(result.error.details.message);

    const genre = {
        id:genres.length+1,
        Name: req.body.Name
    };
    genres.push(genre);
    res.send(genre);
});
//Handling PUT method with Name
router.put('/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre) return res.status(404).send("Error 404!!! The page you requested is not found");
    const {error} = validateGenre(req.body);
    if(error){
        res.status(400).send(error.details.message);
        return;
    }
    genre.Name = req.body.Name;
    res.send(genre);
});
//Handling DELETE method with Name
router.delete('/:Name',(req,res)=>{
    const genre = genres.find(d=>d.Name===req.params.Name);
    if(!genre) return  res.status(404).send("Error 404!!! The page you requested is not found");
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});
module.exports = router;