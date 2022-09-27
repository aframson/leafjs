const {basicAuth} = require('../../../middlewares')

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

module.exports = userModel = (socket)=>{
    
      socket.on('user-data',(d)=>{
          userData.push(d)
          socket.emit('get-user',userData)
      })

}