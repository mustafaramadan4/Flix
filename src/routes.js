const express = require('express');
const bodyParser  = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'flix-main-db.cmpbc10hqhyn.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'lakeshow2020',
    post: 3306,
    database: 'flixdb'
});

// start our backend server
const app = express();

// Create GET route to return data from Users table
app.get('/users', function (req, res) {
    const email = req.query.email;
    const password = req.query.password;

    connection.getConnection(function (err, connection) {
        if (err) {
            console.log('DB connection failed: ' + err.stack);
            return;
        }
        connection.query(`SELECT * FROM users WHERE Email='${email}' AND Password='${password}'`, function (error, results, fields) {
            if (error) {
                console.log('Error during query');
                throw error;
            }
            // Send the results from the query back to the API caller
            res.send(results);
        });
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    const url = 'https://flix-express.herokuapp.com/users?email=humzam99%40gmail.com&password=ghi%40678'
    console.log('Go to ' + url + ' so you can see the data!');
})

