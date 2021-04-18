const http = require("http");

http.createServer(( request , response)=>{
    let body = {} ;
    request.on("error",(err)=>{
        console.error(err);
    }).on('data',(chunk)=>{
        body.push(chunk.toString());
    }).on('end',()=>{
        body = Buffer.concat(body).toString();
        console.log("body",body);
        response.writeHead(200,{'Content-type':'text/html'})
        response.end('hello world\n')
    });
}).listen(8088);

console.log("srever started");