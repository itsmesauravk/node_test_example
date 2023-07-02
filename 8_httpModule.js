const http = require('http')

let server = http.createServer((req,res)=>{
    console.log(req)
    if (req.url === '/'){
        res.end("Welcome to the home page senior.")
    }
    if (req.url === '/about'){
        res.end("You wanna know about us !!!!")
    }
    res.end(`<h1>Ooops !!</h1>
    <p>somthing the page you looking for is not here...</p>
    <a href='/'>Home</a> `)
})
server.listen(5000)