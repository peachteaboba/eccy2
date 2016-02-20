/**
 * Created by anndyfeng1 on 2/12/16.
 */

// this is our customers.js file located at /server/controllers/customers.js

// :::::::::::::   CONTROLLER   :::::::::::::::



var mongoose = require('mongoose');  // need to require mongoose to be able to run mongoose.model()

var User = mongoose.model('Users');  // access our model through var Dot



module.exports = (function() {
    return {

        // this will make a call to the model ----------> Get all dots
        index: function(req, res) {
            User.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    //console.log(results);  // all the friends get returned in the 'results' variable


                    res.json(results);
                }
            })
        },



        create: function(req, res) {
            var user = new User({name: req.body.name, email: req.body.email});
            user.save(function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully added a user!');
                    console.log(user);
                    res.redirect('/users');
                }
            });
        },

        delete: function(req, res) {
            User.remove({_id: req.params.id}, function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully deleted a user!');
                    res.redirect('/users');
                }
            });
        }














    }
})();













