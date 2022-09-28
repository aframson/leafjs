/** MAIN CONFIG.JS
 * =======================================================================
 *  Contains nessesary configurations usful in the settings pages 
 * =======================================================================
 */

 const express = require('express')
 const log = require('morgan')
 const cors = require('cors')
 const cookieParser = require('cookie-parser')
 const multer = require('multer')
 const upload = multer()
 
 module.exports = (app) => {
     // to prevent cors errors
     app.use(cors());
     // log requests to the console 
     app.use(log('tiny'));
     // parse application/json
     app.use(express.json());
     // parse raw text
     app.use(express.text());
     // parse application/x-www-form-urlencoded
     app.use(express.urlencoded({ extended: true }));
     app.use(cookieParser());
     // parse multipart/form-data
     app.use(upload.array());
     // allow static files 
     app.use(express.static('public'));
 }