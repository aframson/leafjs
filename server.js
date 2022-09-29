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
const Leaf = require('leaf-server')

Leaf.init(5050,
    {
        origin: '*',
        methods: ["GET", "POST"],
        errorHandler: require('./configs/errorHandling.js'),
    },
    (io, leaf) => {
        // 1. Realtime Routes 
        require('./api/realtime/route')(io)
        // 2 .adding the config file 
        require('./configs/app')(leaf)
        // 3 .REST API Routes 
        require('./api/rest/route')(leaf, io);
    })