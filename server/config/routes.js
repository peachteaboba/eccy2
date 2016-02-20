/**
 * Created by peachteaboba on 2/14/16.
 */
// First, at the top of your routes.js file you'll have to require the controller
var users = require('./../controllers/users.js');



// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)


module.exports = function(app) {

    app.get('/users', function(req, res) {    // show all users
        users.index(req, res);
    });

    app.post('/addUser', function(req, res) {     // add a new user
        users.create(req, res);
    });

    app.get('/user/:id/delete', function(req, res) {    // delete a user
        users.delete(req, res);
    });



};


