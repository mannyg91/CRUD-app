const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require ('dotenv');
dotenv.config(); //allows access to .env file

const dbService = require('./dbService');  


app.use(cors()); 
app.use(express.json()); //allows sending in json format
app.use(express.urlencoded({ extended : false }));


// create
app.post('/insert', (request, response) => {
    const { name } = request.body;
});



// read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance(); //checks for db instance, runs function in dbService.js

    const result = db.getAllData(); //returns a promise since it is a async function

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

});



// update 




// delete
app.listen(process.env.PORT, () => console.log('app is running')); //env grabs port number