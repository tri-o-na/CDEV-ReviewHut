"use strict";
const FavouritesDB = require('../models/FavouritesDB');
const Favourite = require('../models/Favourite');

var favouritesDB = new FavouritesDB();

function addFavourite(request, respond){
    var favourite = new Favourite(null, request.body.restaurant_id, request.body.user_id, request.body.restaurant_name, request.body.Restaurant_restaurant_id)
    favouritesDB.addFavourite(favourite, function(error, result){
        if(error){
            throw error;
        }
        else{
            respond.json(result);
        }
    })
}

function getFavourites(request, respond){
    var userID = request.params.user_id;
    favouritesDB.getFavourites(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function deleteFavourite(request, respond){
    var favouritesID = request.params.favourite_id;
    favouritesDB.deleteFavourite(favouritesID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteFavourite2(request, respond){
    var userID = request.params.user_id;
    favouritesDB.deleteFavourite2(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {addFavourite, getFavourites, deleteFavourite, deleteFavourite2};