/**
 * Created by peachteaboba on 2/14/16.
 */

// This is the customer.js file located at /server/models/customer.js

// :::::::::::::   MODEL   :::::::::::::::

// We want to create a file that has the schema for our users and
// creates a model that we can then call upon in our controller


var mongoose = require('mongoose');
// create our UsersSchema
var UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Users', UsersSchema); // We are setting this Schema in our Models as 'Users'




