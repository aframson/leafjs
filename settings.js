/**
 * =======================================================================
 *  This software is a product of cycletech.ltd intended to serve as a 
 *  container for building the soma server side application
 * =======================================================================
 *  This is the settings page with cahes all the other configurations 
 *  before the application starts
 * =======================================================================
 *  Author : CycleTech
 *  Date : 26th September 2022
 *  Developer : Richard Obiri
 * =======================================================================
 */

const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const {PORT,NODE_ENV} = require('./configs/port'); // distructred PORT and ENV from the ports config
app.set('port', PORT); // set port 
app.set('env', NODE_ENV); // set environment

const server = http.createServer(app)
const io = new Server(server,{ 
    cors:{
        origin:"*", // accept app origin
        method:["POST","GET"] // you can add more methods eg. DELETE , UPDATE etc...
    }
})
// checking for connected users 
io.on('connection',(socket)=>{
    console.log('user connected ',socket.id)
})
// adding the config file 
require('./configs/app')(app)

// adding the branches (router) page
require('./viens')(app,io);

// introduction page begins with '/'
app.get('/',(req,res)=>{
    res.render('public')
})

// error handling 
require('./configs/error')(app)

// export the server 
module.exports = server;

// listern to the server
server.listen(PORT, () => {
    console.log(
        `
============================================================
✅ Leaf Server started @  http://localhost:${app.get('port')}.
✅ Environment : ${app.get('env')}
============================================================
        `
    );
});