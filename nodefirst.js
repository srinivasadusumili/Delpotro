	

	var http=require("http");
    http.createServer(function(request,response){
    response.writeHead(199,{'Content-Type':'text/plain'});
    response.send('Hello World\n');
}).listen(process.env.PORT || 1345);