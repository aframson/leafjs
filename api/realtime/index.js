
/** REAL-TIME API
 * =======================================================================
 *  This is the router pages where all Real time APIs are 
 *  directed to 
 * =======================================================================
 */

module.exports = function (io) {
    // listerning for connection
    io.on('connection', (socket) => {
         console.log('user connected ', socket.id)  // checking for connected users 

         /**
          * Routes begins here 
          */
         require('./services/users')(socket)
    })
}