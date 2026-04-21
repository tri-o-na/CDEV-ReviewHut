"use strict";

class Favourite {
    constructor(favourite_id, restaurant_id, user_id, restaurant_name, Restaurant_restaurant_id) {
        this.restaurant_id = restaurant_id;
        this.user_id = user_id;
        this.restaurant_name = restaurant_name;
        this.Restaurant_restaurant_id = Restaurant_restaurant_id;
        this.favourite_id = favourite_id;
    }
    getFavouriteId() {
        return this.favourite_id;
    }
    
    getRestaurantId() {
        return this.restaurant_id;
    }

    getUserId() {
        return this.user_id;
    }

    getRestaurantName() {
        return this.restaurant_name;
    }
    getRestaurantRestaurantId() {
        return this.Restaurant_restaurant_id;
    }
}

module.exports = Favourite;