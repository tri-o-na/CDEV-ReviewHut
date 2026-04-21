"use strict";

const { type } = require('express/lib/response');
const res = require('express/lib/response');
var db = require('../db-connection');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * FROM Restaurant";
        db.query(sql, callback);
    }
    
    getRestaurantDetails(restaurantID, callback){
        var sql = "SELECT * FROM Restaurant WHERE restaurant_id = ?";
        db.query(sql, [restaurantID], callback);
    }

    addRestaurant(restaurant, callback){
        var sql = "INSERT INTO Restaurant (restaurant_id, restaurant_name, restaurant_address, contact_no, cuisine, price_range, type_of_dining, restaurant_picture, schedule_hours, description) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [restaurant.getRestaurantId(), restaurant.getRestaurantName(), restaurant.getRestaurantAddress(), restaurant.getContactNo(), restaurant.getCuisine(), restaurant.getPriceRange(), restaurant.getTypeOfDining(), restaurant.getRestaurantPicture(), restaurant.getScheduleHours(), restaurant.getDescription()], callback);
    }
    getAvgRating(restaurantID, callback) {
        var sql = "SELECT AVG(reviewHut.Review.rating) as average_rating, reviewHut.Restaurant.* FROM reviewHut.Review, reviewHut.Restaurant WHERE reviewHut.Review.restaurant_id = ?";
        db.query(sql, [restaurantID], callback);
    }
    getSearchBar (search, callback){ 
        var sql = "SELECT * from reviewHut.Restaurant WHERE restaurant_name LIKE '%"+search+"%' "; 
        db.query(sql, [search], callback);
    }
    //filterCuisine
    getFastFood(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Fast Food' ";
        db.query(sql, callback);
    }
    getChinese(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Chinese' ";
        db.query(sql, callback);
    }
    getMalay(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Malay' ";
        db.query(sql, callback);
    }
    getIndian(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Indian' ";
        db.query(sql, callback);
    }
    getItalian(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Italian' ";
        db.query(sql, callback);
    }
    getWestern(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Western' ";
        db.query(sql, callback);
    }
    getOther(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.cuisine = 'Other' ";
        db.query(sql, callback);
    }

    //filterPrice
    getPriceCheap(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.price_range = 'Cheap' ";
        db.query(sql, callback);
    }
    getPriceAffordable(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.price_range = 'Affordable' ";
        db.query(sql, callback);
    }
    getPriceExpensive(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.price_range = 'Expensive' ";
        db.query(sql, callback);
    }

    //filterTypeOfDining
    getCasualDining(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.type_of_dining = 'Casual Dining' ";
        db.query(sql, callback);
    }
    getFineDining(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.type_of_dining = 'Fine Dining' ";
        db.query(sql, callback);
    }
    getBuffet(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.type_of_dining = 'Buffet' ";
        db.query(sql, callback);
    }

    //filter24HOURS
    get24HOURS(callback){
        var sql = "SELECT * FROM Restaurant WHERE Restaurant.schedule_hours = '24HOURS' ";
        db.query(sql, callback);
    }
}

module.exports = RestaurantsDB;