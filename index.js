const http = require('http'); // Require http library to start the servger
const PORT = 8080; // The port our server will listen to 

const server =  http.createServer(function(req, res) {
    // load a msg each time a request is received
    console.log('Receieved' + req.method + ' request for: ' + req.url);

    // send headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // send body response
    res.end("Hello World");
});


server.listen(PORT, "localhost", null, function(){
    console.log("Server is listening on localhost:8080");
});