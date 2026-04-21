"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function addReview(request, respond){
    var now = new Date().toLocaleString();
    var review = new Review(null, request.body.review, request.body.rating, request.body.restaurant_id, request.body.user_id, now.toString());
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.error;
        }
        else{
            respond.json(result);
        }
    })
}

function getRestaurantReviews(request, respond){
    var restaurantID = request.params.restaurant_id;
    reviewsDB.getRestaurantReviews(restaurantID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getOneReview(request, respond){
    var reviewID = request.params.review_id;
    reviewsDB.getOneReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
		else{
			respond.json(result);
		}
    });
}

function getReviews(request, respond){
    reviewsDB.getReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateReview(request, respond){
    var now = new Date().toLocaleString();
    var review = new Review(parseInt(request.params.review_id), request.body.review, request.body.rating, request.body.restaurant_id, request.body.user_id, now.toString());
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    var reviewID = request.params.review_id;
    reviewsDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview2(request, respond){
    var userID = request.params.user_id;
    reviewsDB.deleteReview2(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}




module.exports = {addReview, getRestaurantReviews, getOneReview, getReviews, updateReview, deleteReview, deleteReview2};