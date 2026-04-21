"use strict";

const { threadId } = require("../db-connection");

class Restaurant {
    constructor(restaurant_id, restaurant_name, restaurant_address, contact_no, cuisine, price_range, type_of_dining, restaurant_picture, schedule_hours, description) {
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.restaurant_address = restaurant_address;
        this.contact_no = contact_no;
        this.cuisine = cuisine;
        this.price_range = price_range;
        this.type_of_dining = type_of_dining;
        this.restaurant_picture = restaurant_picture;
        this.schedule_hours = schedule_hours;
        this.description = description;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getRestaurantName() {
        return this.restaurant_name;
    }

    getRestaurantAddress() {
        return this.restaurant_address;
    }
	
	getContactNo() {
        return this.contact_no;
    }

    getCuisine() {
        return this.cuisine;
    }

    getPriceRange() {
        return this.price_range;
    }

    getTypeOfDining() {
        return this.type_of_dining;
    }

    getRestaurantPicture() {
        return this.restaurant_picture;
    }

    getScheduleHours() {
        return this.schedule_hours;
    }
    getDescription() {
        return this.description;
    }

}

module.exports = Restaurant;