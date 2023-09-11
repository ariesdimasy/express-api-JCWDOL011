const http = require("http")
const PORT = 8000

const server = http.createServer(async (req, res) => {
   
    if(req.url === '/api' && req.method === "GET") { 
        console.log("hello world")
        res.writeHead(200, {
            "Content-Type":"application/json"
        })
        res.write("Hello World")
        res.end()
    } 
    else if(req.url === '/' && req.method === "GET") { 
        console.log("home")
        res.writeHead(200, {
            "Content-Type":"application/json"
        })
        res.write("HOME")
        res.end()
    }
    else {
        res.writeHead(404, {
            "Content-Type":"application/json"
        })
        res.end(JSON.stringify({ message:"route not found"}))
    }
})

server.listen(PORT, () => {
    console.log("server run on port = ", PORT)
})