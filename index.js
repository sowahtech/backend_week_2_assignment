//importing express package
const express = require('express');

//request handlers
const handlePostSignUpRequest = (req, res) => {
    res.send("<h1>voila, welcome to the sign up page. please enter your details</h1>")
}

const handleGetLoginRequest = (req, res) => {
    res.send("<h1>Login successful. Enjoy your stay</h1>")
}

//creating a server instance
const server = express();

//midddlewares
server.post('/signUp', handlePostSignUpRequest);
server.get('/login', handleGetLoginRequest);

//starting the server
server.listen(3000, () => console.log("server is ready to receive requests"))