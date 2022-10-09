
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
const router = new express.Router()
const { basicAuth } = require('../../../settings/middlewares/index')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user:'naturalspacetechgh@gmail.com',
        pass:'N@turaltech77'
    }
});

module.exports = function emailEndpoint(io) {

    // fetch user endpoint
    router.post('/send', basicAuth, async (req, res, next) => {

        const { message, from, to, subject} = req.body

        const mailOptions = {
            from: from, 
            to: to, // the user email
            subject: subject,
            html: `<h4>Reset Password</h4> ${message}`
        };


        const info = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               res.status(400).send(`Message Error: ${error}`)
            }else{
                res.status(200).send(`Message sent: ${info}`)
            }
            res.status(200).send(`Message sent: ${info}`)

        });

       
    })

    return router; // make sure you return router
}