//importing express package
const express = require('express');

//request handlers
const handlePostSignUpRequest = (req, res) => {
    res.send("<h1>voila, welcome to the sign up page. please enter your details</h1>")
}

const  handlePutProfileRequest = (req, res) => {
    res.send("<h1>Success. Your profile page updated</h1>")
}



//creating a server instance
const server = express();

//midddlewares
server.post('/signUp', handlePostSignUpRequest);
server.get('/login', handleGetLoginRequest);
server.put('/profile', handlePutProfileRequest);

//starting the server
server.listen(3000, () => console.log("server is ready to receive requests"))