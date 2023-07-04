//http server
const http = require('http')

let server = http.createServer((req,res)=>{
    let url = req.url
    if(url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>welcome to homepage</h1> thanks')
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>oppss!!</h1> page not found..')
        res.end()
    }
})
server.listen(5000)