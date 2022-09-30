

![logo](https://github.com/aframson/leafjs/raw/main/settings/public/assets/banner.png)

An efficient server implies a lower cost of the infrastructure, a better
responsiveness under load and happy users. How can you efficiently handle the
resources of your server, knowing that you are serving the highest number of
requests as possible, without sacrificing security validations and handy
development?


Enter Leaf. Leaf is a Server-side  framework highly focused on providing the best
developer experience with the least overhead and a powerful plugin architecture.
It is inspired by Nodejs , Express , Socket.io , Mysql ,MongoDB and as far as we know, it is Realtime Server Framework  

## The Abstracted Realtime & REST API Server Framework

![logo](https://github.com/aframson/leafjs/raw/main/settings/public/assets/arc.png)

leaf.js is a server container consisting of the following stacks 
- node 
- socket.io
- express
- mysql
- mongodb
- nodemon (for fast refresh , check package.json for settings).

these have been configured and abstracted in a way to make you concentrate on your API endpoints , with a clear documentaion you will be able to set up a realtime server with one of the above database (mysql, mongodb).

This branch refers to the leaf v1 release


### Quick start

Create a folder and make it your current working directory:

Generate a leaf project with `npx create-leaf app-name`:

```sh
npx create-leaf app-name
```

To start the app in dev mode:

```sh
cd app-name/
npm run fast
```
For production mode:

```sh
cd app-name
npm run start
```

Under the hood `npx creat-leaf app-name` downloads and runs [Leafjs](https://github.com/fastify/create-fastify), which in turn uses the
generate functionality of [Leafjs CLI](#).


### Example - RealTime Server

everything has already been setup including express , node and socket.io all you have to do is to go to the 

/api/realtime/route.js

```js

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
         require('./services/users')(socket,io) // this is a route to the users API in the ./service folder
    })
}
```

Inside the ./realtime/services/users.js folder



```js

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
```
### FRONTEND
On the frontend you use socket.io to listern and emit messages or data , so make sure socket.io is installed at the frontend

```js

/** REAL-TIME API
 *  FRONT END
 */

// function to emit or send data

const SendData = ()=>{
    let data =   {
        id:7,
        name:"Ama",
        gender:"female",
        age:20
    }
    socket.emit(data,"user-data")
}

// listern for realtime response 
const useEffect(()=>{
  socket.on('get-user',(data)=>{
        console.log(data) // [...] contains the updated information in real time 
    })
},[])
```


### Example - REST Server

/api/rest/route.js

```js
/** REST API
 * =======================================================================
 *  This is the router pages where all APIs are 
 *  directed to 
 * =======================================================================
 */
 module.exports = function(leaf,io){

    leaf.use('/users',require('./services/users')()) // takes url with http://localhost/users/...

}
```


Inside the ./rest/services/users.js folder

```js

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

module.exports = function userEndpoint() {
    
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
         
    })

return router; // make sure you return router
}
```


for the frontend for this server you can use the fetch method in javascript or any other http
method for sending and recieving API's



Do you want to know more? Head to the <a
href="#"><code><b>Getting Started</b></code></a>.


### Leafjs v1.x 

> ## Note
> This framework is intended for people who knows the below stacks 
  - Nodejs
  - Express
  - Socket.io
  - MongoDb
  - Mysql

### Core features
- **Highly Scalable:** Leaf was build with scalability as the first to consider
- **Extendible:** Leaf is fully extensible via other plugins and ability to add more database to it
- **Developer friendly:** the framework is built to be very expressive and help
  the developer in their daily use, without sacrificing performance and
  security.


## Ecosystem

- [Community](#) - Community supported
  plugins.
- [Live Examples](#) - Multirepo with a broad
  set of real working examples.
- [Discord](#) - Join our discord server and chat with
  the maintainers.

## Support
Please visit [Leafjs help](#) to view prior
support issues and to ask new support questions.

## Team

_Leafjs_ is the result of the work of a great community. Team members of the soma engineering team (A delivery app intended t make campus life easy).

**Lead Maintainers:**
* [__Richard Obiri__](https://github.com/aframson)
* [__Kevin Obiri__](https://github.com/obirikan)

### Leafjs Core team


## Acknowledgements

This project is kindly sponsored by:
- [Philbro Group of Company](https://nearform.com)

## License

Licensed under [MIT](./LICENSE).
