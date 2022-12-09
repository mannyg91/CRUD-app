const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require ('dotenv');
dotenv.config(); //allows access to .env file

app.use(cors()); 
app.use(express.json()); //allows sending in json format
app.use(express.urlencoded({ extended : false }));


// create
app.post('/insert', (request, response) => {

});



// read
app.get('/getAll', (request, response) => {
    console.log('test');
});



// update 




// delete
app.listen(process.env.PORT, () => console.log('app is running')); //env grabs port number