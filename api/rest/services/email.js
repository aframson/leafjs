
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
        pass:''
    }
});

module.exports = function emailEndpoint(io) {

    // fetch user endpoint
    router.post('/send', basicAuth, async (req, res, next) => {

        const { message, from, to, subject} = req.body

       
        const mailOptions = {
            from: from,
            to: to,
            cc:'',
                bcc:'',
                subject: subject,
                /* Adding HTML and Text Version, so the email will not land up in the Spam folder */
                html: 'Hello Team! <br><br>Please find attached...<br><br>Thanks,<br>XXXXX',
                text: message,
                // attachments: [{
                //     // file on disk as an attachment, concatenating the file extension separately since NODE is not renaming the file properly with fs.renameSync
                //     filename: finalFileNameWithoutExt + '.xlsx',
                //     path: reportsLocationPathWithYearMonth + finalFileNameWithoutExt + '.xlsx' // stream this file
                // }]
            };


        const info = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               res.status(400).send(`Message Error: ${error}`)
            }else{
                res.status(200).send(`Message sent: ${info.response}`)
            }

        });

       
    })

    return router; // make sure you return router
}