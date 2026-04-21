"use strict";
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');

var usersDB = new UsersDB();

function login(request, respond){

	var username = request.body.username;
	var password = request.body.password;
	
	usersDB.login(username, password, function(error, result){
		if(error){
			throw error;
		}
		else if (result.length > 0) {
			return respond.json ({message: "success", username:result[0].username, user_id:result[0].user_id});
		}
		else{
			return respond.json ({message: "fail"});
		}
	});
}

function addUser(request, respond){
	var user = new User(null, request.body.name, request.body.user_address, request.body.username, request.body.password, request.body.email, request.body.gender, request.body.mobile_number, request.body.user_picture);
	usersDB.addUser(user, function(error, result){
		if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function getUser(request, respond){
	var userID = parseInt(request.params.user_id);
	
	usersDB.getUser(userID, function(error, result){
		if(error){
			throw error;
		}
		else{
			respond.json(result);
		}
	});
}

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
         if(error){
             throw error;
         }
         else{
             respond.json(result);
         }
     });
 }

function updateUser(request, respond){
	var user = new User(parseInt(request.params.user_id), request.body.name, request.body.user_address, request.body.username, request.body.password, request.body.email, request.body.gender, request.body.mobile_number, request.body.user_picture);
	usersDB.updateUser(user, function(error, result){
		if(error){
			throw error;
		}
		else{
			respond.json(result);
		}
	});
}

function deleteUser(request, respond){
	var userID = parseInt(request.params.user_id);
	usersDB.deleteUser(userID, function(error, result){
		if(error){
			throw error;
		}
		else{
			respond.json(result);
		}
	});
}

function forgetPassword(request, respond){

	var username = request.body.username;
	var email = request.body.email;
	
	usersDB.forgetPassword(username, email, function(error, result){
		if(error){
			throw error;
		}
		else if (result.length > 0) {
			return respond.json ({message: "success", username:result[0].username, user_id:result[0].user_id});
		}
		else{
			return respond.json ({message: "fail"});
		}
	});
}





module.exports = {login, addUser, getUser, getAllUsers, updateUser, deleteUser, forgetPassword};

