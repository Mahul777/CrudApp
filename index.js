const express = require('express')  //import the Express framework
const app = express()               //creates an instance object of an Express application by invoking the express function
                                   // that was imported in the previous line of 

const db = require('./models/connection');
//here we are going to use middleware
app.use(express.json())

//Insertion of data in database 
//Create User
app.post("/adduser",(req,res)=>
{
  //humay peecha sa data lana hoga 
  //console.log(req.body);
  //we created a object
  const user=
  {
    name:req.body.name,
    email:req.body.email,
    city:req.body.city,
    phone:req.body.mobile//peecha sa mobile sa aha raha hai data 
                           //phone is created in xamp database 
  }
  let sql = "INSERT INTO employee SET ?"                     //? is a place holder it means at run time ? id being replaced by user value 
                                                               //which come from xamp database
  //run query on db
  //user -> peecha sa data leh kar aha raha hai 
  db.query(sql,user,(err,result)=>
  {
    if(err) throw err;
    else
    {
        res.json(result);
    }
  });
})         

//Selection of data from database
//showuser 
app.get("/showUser",(req,res)=>
{
   let sql = "SELECT * from `employee` "
   db.query(sql,(err,result)=>
   {
    if(err) throw err
    else
    {
      res.json(result);
    }
   })   
}) 

//show particular user 
app.get("/showUser/:email",(req,res)=>
{
  let sql = `SELECT * FROM employee WHERE email ='${req.params.email}'`;
  db.query(sql,(err,result) =>
  {
    if(err) throw err;
    else
    {
      res.json(result);
    }
  })
})

//deleteUser 
app.delete("/deleteUser/:email",(req,res)=>
{
  let emailId = req.params.email;
  let sql = `DELETE FROM employee where email = '${emailId}'`;
  db.query(sql,(err,result)=>
  {
   if(err) throw err
   else
   {
    res.json(result);
   } 
  })
})
/*
app.get("/test",(req,res)=>
{
    res.json({"message":"testing"})

})
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>

    console.log('Server is running at ${PORT}')
)