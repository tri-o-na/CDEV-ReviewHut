"use strict";

var db = require('../db-connection');

class FavouritesDB{
    addFavourite(favourite, callback){
        var sql = "INSERT INTO Favourites (favourite_id, restaurant_id, user_id, restaurant_name, Restaurant_restaurant_id) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [favourite.getFavouriteId(), favourite.getRestaurantId(), favourite.getUserId(), favourite.getRestaurantName(), favourite.getRestaurantRestaurantId()], callback);
    }
    getFavourites(userID, callback){
        var sql = "SELECT reviewhut.restaurant.*, reviewhut.favourites.* FROM reviewhut.favourites, reviewhut.restaurant WHERE reviewhut.favourites.restaurant_id = reviewhut.restaurant.restaurant_id AND user_id = ?";
        db.query(sql, [userID], callback);
    }
    deleteFavourite(favouriteID, callback){
        var sql = "DELETE from Favourites WHERE favourite_id = ?";
        return db.query(sql, [favouriteID], callback);
    }
    deleteFavourite2(userID, callback){
        var sql = "DELETE from Favourites WHERE user_id = ?";
        return db.query(sql, [userID], callback);
    }
}

module.exports = FavouritesDB;

