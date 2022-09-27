
/** REAL-TIME API
 * =======================================================================
 *  This is the router pages where all APIs are 
 *  directed to 
 * =======================================================================
 */

module.exports = function (io) {
    // checking for connected users 
    io.on('connection', (socket) => {
         console.log('user connected ', socket.id)
         require('./models/users')(socket)
    })
}