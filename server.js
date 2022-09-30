/**
 * =======================================================================
 *  This software is a product of cycletech.ltd intended to serve as a 
 *  container for building the soma server side application in real time
 * =======================================================================
 *  This is the settings page with cahes all the other configurations 
 *  before the application starts
 * =======================================================================
 *  Author : CycleTech
 *  Date : 26th September 2022
 *  Developer : Richard Obiri
 * =======================================================================
 */
const Leaf = require('leaf-server')

Leaf.init(5050,
{
    origin: '*', // you can change it to a specific url location 
    methods: ["GET", "POST"], // you ccan add more methods to it 
    errorHandler: require('./settings/configs/errorHandling'), // you can write your own error handler and locate it 
},
(io, leaf) => {
    // 1. Realtime Routes 
    require('./api/realtime/route')(io)
    // 2 .Adding the config file 
    require('./settings/configs/server_config')(leaf)
    // 3 .REST API Routes 
    require('./api/rest/route')(leaf, io);
})