// import the mysql module, which provides a way to connect to a MySQL database from a Node.js application.
const mysql = require('mysql');

//Database Connection 
// creates a MySQL database connection object using the mysql.createConnection() method. 
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "",
    database:"ems"
})
//db is only registered so we need 3to connect 
db.connect((err)=>
    {
      if(err)
      {
          console.log(err.sqlMessage);
      } 
      else
      {
         console.log("Database Connected");
      }  
    })

    module.exports = db;//is used to export the db object, which represents a connection to a MySQL database, from the current module