/** MAIN CONFIG.JS
 * =======================================================================
 *  Contains nessesary configurations usful in the settings pages 
 * =======================================================================
 */

const Leaf = require('../settings')

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
            StaticName: 'public'
    })
}