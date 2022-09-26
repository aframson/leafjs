module.exports = function(app,io){

    app.use('/users',require('./api/v1/users')(io))

}