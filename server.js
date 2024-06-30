const express = require('express')
const app = express();

app.get('/',function(req,res)
{
    res.send('HELLO WORLD!')
})

app.get('/mongodb',(req,res)=>
{
    res.send("This is the MongoDB course")
})
app.get('/react',(req,res)=>
{
    res.send("This is react course page")
})
app.get('/project',(req,res)=>
{
    let details = {
        name:"bookshop",
        frontend:"react",
        backend:"nodejs",
        implementation:"crud"
    }
    res.send(details)
})
app.listen(3000,()=>{
    
    console.log("Server is running on port 3000\n");
})    