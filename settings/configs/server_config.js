/** MAIN CONFIG.JS
 * =======================================================================
 *  Contains nessesary configurations usful in the settings pages 
 * =======================================================================
 */

const Leaf = require('leaf-server')

module.exports = (app) => {
    Leaf.config(app,
        {
            cors: true,
            log: true,
            json: true,
            text: true,
            urlEncodeExtented: true,
            cookieParser: true,
            useUploadArray: true,
            useStaticFiles: true,
    })
}