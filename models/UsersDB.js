"use strict";

var db = require('../db-connection');

class UsersDB {
  login(username, password, callback) {
    var sql = "SELECT user_id, username FROM User WHERE username = ? AND password = ?";
    db.query(sql, [username, password], callback)
  }

  addUser(user, callback) {
    var sql = "INSERT INTO User (user_id, name, user_address, username, password, email, gender, mobile_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [user.getUserId(), user.getName(), user.getUserAddress(), user.getUsername(), user.getPassword(), user.getEmail(), user.getGender(), user.getMobileNumber()], callback);
  }

  getUser(UserID, callback) {
    var sql = "SELECT * from reviewHut.User WHERE user_id = ?";
    db.query(sql, [UserID], callback);
  }

  getAllUsers(callback) {
    var sql = "SELECT * from reviewHut.User";
    db.query(sql, callback);
  }

  updateUser(user, callback) {
    var sql = "UPDATE User SET name = ?, user_address = ?, username = ?, password = ?, email = ?, gender = ?, mobile_number= ?, user_picture = ? WHERE user_id = ?";
    db.query(sql, [user.getName(), user.getUserAddress(), user.getUsername(), user.getPassword(), user.getEmail(), user.getGender(), user.getMobileNumber(), user.getUserPicture(), user.getUserId()], callback);
  }

  deleteUser(UserID, callback) {
    var sql = "DELETE from User WHERE user_id = ?";
    db.query(sql, [UserID], callback);
  }
  forgetPassword(username, email, callback) {
    var sql = "SELECT user_id, username FROM User WHERE username = ? AND email = ?";
    db.query(sql, [username, email], callback)
  }

}

module.exports = UsersDB;