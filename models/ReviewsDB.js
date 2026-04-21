"use strict";

var db = require('../db-connection');

class ReviewsDB{
    addReview(review, callback){
        var sql = "INSERT INTO Review (review_id, review, rating, restaurant_id, user_id, datePosted) VALUES(?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getReviewId(), review.getReview(), review.getRating(), review.getRestaurantId(), review.getUserId(), review.getDatePosted()], callback);
    }
    getRestaurantReviews(restaurantID, callback){
        var sql = "SELECT reviewHut.User.username, reviewHut.Review.* FROM reviewHut.Review, reviewHut.User WHERE reviewHut.Review.user_id = reviewHut.User.user_id AND restaurant_id = ?";
        db.query(sql, [restaurantID], callback);
    }
    getOneReview(reviewID, callback){
        var sql = "SELECT * from reviewHut.Review WHERE review_id = ?";
        db.query(sql, [reviewID], callback);
    }
    getReviews(callback){
        var sql = "SELECT * FROM reviewHut.Review ";
        db.query(sql, callback);
    }
    deleteReview(reviewID, callback){
        var sql = "DELETE from Review WHERE review_id = ?";
        return db.query(sql, [reviewID], callback);
    }
    updateReview(review, callback){
        var sql = "UPDATE Review SET review = ?, rating = ?, restaurant_id = ?, user_id = ?, datePosted = ? WHERE review_id = ?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getRestaurantId(), review.getUserId(), review.getDatePosted(), review.getReviewId()], callback);
    }
    deleteReview2(userID, callback){
        var sql = "DELETE from Review WHERE user_id = ?";
        return db.query(sql, [userID], callback);
    }
    

}

module.exports = ReviewsDB;