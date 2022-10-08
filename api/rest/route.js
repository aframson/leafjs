/** REST API
 * =======================================================================
 *  This is the router pages where all APIs are 
 *  directed to 
 * =======================================================================
 */
 module.exports = function(leaf,io){

    leaf.use('/users',require('./services/users')(io)) // takes url with http://localhost/users/...
    leaf.use('/email',require('./services/email')(io))

}