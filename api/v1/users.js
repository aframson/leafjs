const express = require('express')
const router =  new express.Router()
const {basicAuth,pageNate} = require('../../middlewares')


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
    
    router.get('/',basicAuth,async(req,res,next)=>{
       res.status(200).send(userData)
    })

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