
/** REAL-TIME API
 * =======================================================================
 *  This is an example to recive userdata , update it and send back 
 *  response in realtime.
 * =======================================================================
 */


// dummy user data
const userData = [
    {
        id:1,
        name:"John doe",
        gender:"male",
        age:22
    },
    {
        id:2,
        name:"kwame Agyapong",
        gender:"male",
        age:22
    },
    {
        id:3,
        name:"kofi ansah",
        gender:"male",
        age:22
    }
    
]

module.exports = userModel = (socket,io)=>{
    
    socket.on('user-data',(d)=>{
        userData.push(d) // update the data
        io.emit('get-user',userData) // send response to the listening channel 'get-user' 
    })


}