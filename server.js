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
const leaf = express()
const http = require('http')
const {Server} = require('socket.io')
const {PORT,NODE_ENV} = require('./configs/port'); // distructred PORT and ENV from the ports config
leaf.set('port', PORT); // set port 
leaf.set('env', NODE_ENV); // set environment

const server = http.createServer(leaf)
const io = new Server(server,{ 
    cors:{
        origin:"*", // accept any origin you can change it to your specific url for security
        method:["POST","GET"] // you can add more methods eg. DELETE , UPDATE etc...
    }
})

// Realtime Routes
require('./api/realtime/route')(io)

// adding the config file 
require('./configs/app')(leaf)

// REST API Routes 
require('./api/rest/route')(leaf,io);

// introduction page begins with '/'
leaf.get('/',(req,res)=>{
    res.render('public')
})
// error handling 
require('./configs/error')(leaf)

// export the server 
module.exports = server;

// listern to the server
server.listen(PORT, () => {
    console.log(
        `
============================================================
✅ Leaf Server started @  http://localhost:${leaf.get('port')}.
✅ Environment : ${leaf.get('env')}
============================================================
        `
    );
});