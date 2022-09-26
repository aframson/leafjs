
/** API MODELS
 * =======================================================================
 *  A  file consisting of all the request needed for an API endpont 
 * 
 *  this is an example with a dummy-data of users to get userdata on 
 * 
 *  GET /http://localhost:5050/users/fetch
 * 
 *  POST /http://localhost:5050/users/add  
 * 
 *  with a listerner of 'fetch-user' for realtime comunications
 *  kindly check documentaion for more details.
 * =======================================================================
 */
const express = require('express')
const router =  new express.Router()
const {basicAuth,pageNate} = require('../../middlewares')


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

module.exports = function userEndpoint(io) {
    
    // fetch user endpoint
    router.get('/fetch',basicAuth,async(req,res,next)=>{
       res.status(200).send(userData)
    })

    // add user data and get realtime response on listerning to 'fetch-user'
    router.post('/add',basicAuth,async (req,res,next)=>{
          let data = {
            id:34,
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age
          }
          userData.push(data)
          res.status(200).json({message:userData})
          io.emit('fetch-user',userData)
         
    })

return router;
}