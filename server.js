const http = require("http");
const PORT = 8080;
const IP = "localhost";

const server = http.createServer(function(req, res){
    
    const { url } = req;

    const response = [];

    response["/"] = "<h1 style='font-size: 100px; color: blue' >CollabCode</h1>";
    response["/user"] = "<h1 style='font-size: 50px;'>User</h1>";

    res.end(response[url] || "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'></head><h1>Em contrução....</html>");

}); 

server.listen(PORT, IP, function() {
    console.log("Servidor em pé....");
})
