//importing express package
const express = require('express');

//request handlers
const handleGetSignUpRequest = (req, res) => {
    res.send("<h1>voila, welcome to the sign up page. please enter your details</h1>")
}


//creating a server instance
const server = express();

//midddlewares
server.post('/signUp', handleGetSignUpRequest);

//starting the server
server.listen(3000, () => console.log("server is ready to receive requests"))