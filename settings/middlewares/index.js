/** MIDDLEWARE
 * =======================================================================
 *  Contains all middleware functions for handling the API
 * =======================================================================
 */
const users = require('../configs/authUsers.json'); //  a json file file containing authorized users for the api

const basicAuth = async (req, res, next) => {

  async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }
  // check for basic auth header
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    res.status(401).send({ message: 'Missing Authorization Header' });
  } else {
    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await authenticate({ username, password });
    if (!user) {
      res.status(401).send({ message: 'Invalid Authentication Credentials' });
    } else {
      next();
    }
  }

}



function realTimeAuth(socket, data, callback) {

  const {username,password} = data
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    callback();
    socket.emit('authenticated',true)
  }else{
    socket.emit('authenticated',false)
  }
}




module.exports = {basicAuth,realTimeAuth};