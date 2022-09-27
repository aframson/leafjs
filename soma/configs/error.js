/** ERROR HANDLING
 * =======================================================================
 *  Contains the function for handling errors in the application
 * =======================================================================
 */
module.exports = (app)=>{
    app.use((req, res, next) => {
        res.status(404).send({ status: 404, error: 'Not found' });
    });
    // catch errors
    app.use((err, req, res, next) => {
        const status = err.status || 500;
        const msg = err.error || err.message;
        res.status(status).send({ status, error: msg });
    });

}