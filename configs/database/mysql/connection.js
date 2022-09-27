/**
 * DATABASE SETTINGS
 * Uncomment the section you want to activate the databse 
 */
const  mysql = require('mysql')

// AWS CONFIGURATION
// let connection = mysql.createConnection({
//     host: 'app-name.c9gklfwgcjwf.us-west-2.rds.amazonaws.com',
//     user: 'admin',
//     port: "3306",
//     password: 'password',
//     database: 'app_database'
//   });



  // CPANEL CONFIGURATION 
  // let connection = mysql.createConnection({
  //   host: 'nastamoventures.com',
  //   user: 'nastamov_soma',
  //   password: 'salvation@77',
  //   database: 'nastamov_soma'
  // });


  // LOCALHOST CONFIGURATION
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soma'
  });

  connection.connect(error => {
    if (error) {
      console.log('❌❌ Database error , Oops could not connect to the mysql ')
      console.log('❌❌ database kindly check the config file to configure  setings ')
      console.log('NOTE : this does not stop the app from running')
      return
    } else {
      console.log('⚡ 🌿 ✅ Database connected successfully')
    }
  });


module.exports = connection