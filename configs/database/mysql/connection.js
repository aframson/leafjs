/**
 * DATABASE SETTINGS (MYSQL)
 * Uncomment the section you want to activate the databse 
 */
const  mysql = require('mysql')

// AWS CONFIGURATION
let aws_connection = mysql.createConnection({
    host: 'app-name.c9gklfwgcjwf.us-west-2.rds.amazonaws.com',
    user: 'admin',
    port: "3306",
    password: 'password',
    database: 'app_database'
  });



  // CPANEL CONFIGURATION 
  let cpanel_connection = mysql.createConnection({
    host: 'domain.com',
    user: 'username',
    password: 'password',
    database: 'database'
  });


  // LOCALHOST CONFIGURATION
  let local_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database'
  });


  // choose the one you want to connect (local_connection , aws_connection , cpanel_connection)
  local_connection.connect(error => {
    if (error) {
      console.log('❌❌ Database error , Oops could not connect to the mysql ')
      console.log('❌❌ database kindly check the config file to configure  setings ')
      console.log('NOTE : this does not stop the app from running')
      return
    } else {
      console.log('⚡ 🌿 ✅ Database connected successfully')
    }
  });


module.exports = local_connection // export the chosen connection type