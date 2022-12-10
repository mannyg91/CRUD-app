const mysql = require('mysql');
const dotenv = require('dotenv')
let instance = null; //for DbService function
dotenv.config();

//creates connection mysql
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db' + connection.state);
})


//Class with db functions~
class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService(); //returns instance if not null, otherwise, creates new instance
    }

    //get data
    async getAllData() {
        try { 
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names;";     
                
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message)); //creates error object that is caught by catch block
                    resolve(results); //if not caught
                })
            });

            // console.log(response);
            return response;
                 
        } catch (error) {
            console.log(error);
        }

    }

    async insertNewName(name) {
        try { 
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO names (name, date_added) VALUES (?,?);";     
                
                connection.query(query, [name, dateAdded] , (err, result) => {
                    if (err) reject(new Error(err.message)); //creates error object that is caught by catch block
                    resolve(result.insertId); //if not caught
                })
            });

            // console.log(response);
            return response;

        } catch (error) {
            console.log(error);
        }
    }
 }

module.exports = DbService; 