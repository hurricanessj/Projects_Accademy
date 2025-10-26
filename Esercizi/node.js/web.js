
var http = require("http");

function process_request(req, res){

    var body = "tanks for calling!\n";
    var content_lenght = body.length;
    res.writeHead(200, {
        'content-lenght': content_lenght,
        'content-Type': 'text/plain'
    });
    res.end(body);

}

var s= http.createServer(process_request);
s.listen(8080);