//import the express module
import express from 'express';

// Instantiate an express object
const app = express();

//Define a port number where
//our server will listen

const PORT = 3000;

//Define the root path
//when main directory is visited i want to see hello world
//request, response
app.get('/', (req, res) => {
    //Send text to client
    res.send('Hello, world!')
});

// Start server 
app.listen(PORT, () => {
    console.log(`Server is running
        at http://localhost:${PORT}`);
});


