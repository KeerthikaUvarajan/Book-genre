const Joi = require('joi');
const express = require('express');
const app = express();
const genres = require('./router/genres');
app.use(express.json());  //Using middleware
app.use('/api/genres', genres);
app.get('/',(req,res)=>{
    res.send("Genres of Book");
});
function validateGenre(genre){
    const schema = {
        Name:Joi.string().min(5).required()
    }
    return Joi.validate(genre,schema);
}
/* - While hosting the webpage I cannot get the port 3000 everytime. Solution for this is by using environment variables
   - Environment variables are set outside the application */
const port = process.env.PORT || 3000; 
app.listen(port,()=>{
    console.log(`Listening in port ${port}...`);
});