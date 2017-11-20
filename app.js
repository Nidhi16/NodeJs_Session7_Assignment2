// Load the http module to create an http server.
var http = require('http');

// variable declaration
var number = 10;

// Function definition of checkOddEven which takes two arguments request object and response object
// This function checks number to be even or odd and write it to the response object
function checkOddEven(request,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    if (number % 2 == 0) {
        console.log("Given number" + " " + number + " "+ "is even number");
        response.write("Given number" + " " + number + " "+ "is even number");
    } else {
        console.log("Given number" + " " + number + " "+ "is odd number");
        response.write("Given number" + " " + number + " "+ "is odd number");
    }
    response.end();
}

// Configure our HTTP server to respond to all requests.
//Listen on port 8000, IP defaults to 127.0.0.1

var server = http.createServer(checkOddEven).listen(8000);
