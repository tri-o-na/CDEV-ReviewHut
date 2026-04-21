"use strict";

class Review {
    constructor(review_id, review, rating, restaurant_id, user_id, datePosted) {
        this.review_id = review_id;
        this.review = review;
        this.rating = rating;
        this.restaurant_id = restaurant_id;
        this.user_id = user_id;
        this.datePosted = datePosted;
    }

    getReviewId() {
        return this.review_id;
    }

    getReview() {
        return this.review;
    }

    getRating() {
        return this.rating;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getUserId() {
        return this.user_id;
    }
    getDatePosted() {
        return this.datePosted;
    }

}

module.exports = Review;