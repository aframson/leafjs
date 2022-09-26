const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const {PORT,NODE_ENV} = require('./configs/port');
app.set('port', PORT);
app.set('env', NODE_ENV);

const server = http.createServer(app)
const io = new Server(server,{ 
    cors:{
        origin:"*",
        method:["POST","GET"]
    }
})
io.on('connection',(socket)=>{
    console.log('user connected ',socket.id)
})

require('./configs/app')(app)
// catch to the router page
require('./branches')(app,io);

app.get('/',(req,res)=>{
    res.render('public')
})

require('./configs/error')(app)

module.exports = server;

server.listen(PORT, () => {
    console.log(
        `Leaf Server started on  http://localhost:${app.get(
            'port'
        )} | Environment : ${app.get('env')}`
    );
});