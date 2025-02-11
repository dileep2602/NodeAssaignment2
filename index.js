//STEP 1: Create an express server
const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
//STEP 2: Create a GET api that returns query param, path param and return both values with info as json
app.get("/user/:id",(req,res)=>{
    const pathParam = req.params.id;
    const quaryParam = req.query.name;
    res.json({
        message : "user detail recieved",
        pathparam : pathParam,
        quaryparam : quaryParam
    });
});

//STEP 3: Create a POST api which acccepts a JSON data. Return an array of data.
app.post("/data",(req,res)=>{
    const data = req.body;
    res.json({
        message : "user detail recieved",
        data : data
    });
});


