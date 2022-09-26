/** PORT SETTINGS 
 * =======================================================================
 *  Contains The PORT number and environment for the server 
 * =======================================================================
 */
const PORT  = process.env.PORT || 5050 // you can change the port here 
const NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = {PORT,NODE_ENV}