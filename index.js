const express = require('express')  //import the Express framework
const app = express()               //creates an instance object of an Express application by invoking the express function
                                   // that was imported in the previous line of 

//Create User
                                
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