/** VIENS.JS
 * =======================================================================
 *  This is the router pages where all APIs are 
 *  directed to 
 * =======================================================================
 */
module.exports = function(app,io){

    app.use('/users',require('./api/v1/users')(io))

}