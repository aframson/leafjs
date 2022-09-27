/** REST API
 * =======================================================================
 *  This is the router pages where all APIs are 
 *  directed to 
 * =======================================================================
 */
 module.exports = function(app){

    app.use('/users',require('./models/users'))

}