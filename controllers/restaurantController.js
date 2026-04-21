"use strict";
const RestaurantsDB = require('../models/RestaurantsDB');
const Restaurant = require('../models/Restaurant');

var restaurantDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function getRestaurantDetails(request, respond){
    var restaurantID = request.params.restaurant_id;
    restaurantDB.getRestaurantDetails(restaurantID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addRestaurant(request, respond){
    var restaurant = new Restaurant(null, request.body.restaurant_name, request.body.restaurant_address, request.body.contact_no, request.body.cuisine, request.body.price_range, request.body.type_of_dining, request.body.restaurant_picture, request.body.schedule_hours, request.body.description)
    restaurantDB.addRestaurant(restaurant, function(error, result){
        if(error){
            throw error;
        }
        else{
            respond.json(result);
        }
    })
}

function getAvgRating(request, respond){
    var restaurantID = parseInt(request.params.restaurant_id);
    restaurantDB.getAvgRating(restaurantID, function(error, result){
        if(error){
            respond.error;
        }
        else{
            respond.json(result);
        }
    });
}

function getSearchBar(request, respond){
    var search = request.params.search;
    restaurantDB.getSearchBar(search, function(error, result){
        if(error){
            throw error;
        }
        else{
            respond.json(result);
        }
    });
}
//filterCuisine
function getFastFood(request, respond){
    restaurantDB.getFastFood(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getChinese(request, respond){
    restaurantDB.getChinese(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getMalay(request, respond){
    restaurantDB.getMalay(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getIndian(request, respond){
    restaurantDB.getIndian(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getItalian(request, respond){
    restaurantDB.getItalian(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getWestern(request, respond){
    restaurantDB.getWestern(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getOther(request, respond){
    restaurantDB.getOther(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//filterPrice
function getPriceCheap(request, respond){
    restaurantDB.getPriceCheap(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getPriceAffordable(request, respond){
    restaurantDB.getPriceAffordable(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getPriceExpensive(request, respond){
    restaurantDB.getPriceExpensive(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


//filterTypeOfDining
function getCasualDining(request, respond){
    restaurantDB.getCasualDining(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getFineDining(request, respond){
    restaurantDB.getFineDining(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getBuffet(request, respond){
    restaurantDB.getBuffet(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


//filter24HOURS
function get24HOURS(request, respond){
    restaurantDB.get24HOURS(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

module.exports = {getAllRestaurants, getRestaurantDetails, addRestaurant, getAvgRating, getSearchBar, 
    getFastFood, getChinese, getMalay, getIndian, getItalian, getWestern, getOther,  
    getPriceCheap, getPriceAffordable, getPriceExpensive,  
    getCasualDining, getFineDining, getBuffet, get24HOURS};
