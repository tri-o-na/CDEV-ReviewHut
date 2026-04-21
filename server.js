var express = require("express"); //using the express web framework

var favouriteController = require('./controllers/favouriteController'); 
var reviewController = require('./controllers/reviewController'); 
var restaurantController = require('./controllers/restaurantController'); 
var userController = require('./controllers/userController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited reviews from user

//restaurants
app.route('/displayRestaurants').get(restaurantController.getAllRestaurants); //works.
app.route('/restaurant/:restaurant_id').get(restaurantController.getRestaurantDetails); //works.
app.route('/addRestaurant').post(restaurantController.addRestaurant); //works.
app.route('/getAvgRating/:restaurant_id').get(restaurantController.getAvgRating); //works.
app.route('/search/:search').get(restaurantController.getSearchBar); //works.
//filterCuisine
app.route('/cuisineFastFood').get(restaurantController.getFastFood); //
app.route('/cuisineChinese').get(restaurantController.getChinese); //
app.route('/cuisineMalay').get(restaurantController.getMalay); //
app.route('/cuisineIndian').get(restaurantController.getIndian); // 
app.route('/cuisineItalian').get(restaurantController.getItalian); //
app.route('/cuisineWestern').get(restaurantController.getWestern); //
app.route('/cuisineOther').get(restaurantController.getOther); //
//filterPrice
app.route('/priceCheap').get(restaurantController.getPriceCheap); //
app.route('/priceAffordable').get(restaurantController.getPriceAffordable); //
app.route('/priceExpensive').get(restaurantController.getPriceExpensive); //
//filerTypeOfDining
app.route('/casualDining').get(restaurantController.getCasualDining); //
app.route('/fineDining').get(restaurantController.getFineDining); //
app.route('/buffet').get(restaurantController.getBuffet); //
//filter24HOURS
app.route('/filter24HOURS').get(restaurantController.get24HOURS); //works.

//user
app.route('/login').post(userController.login); //works.
app.route('/addUser').post(userController.addUser); //works.
app.route('/displayUser/:user_id').get(userController.getUser); //works.
app.route('/displayUsers').get(userController.getAllUsers); //works.
app.route('/updateUser/:user_id').put(userController.updateUser); //works.
app.route('/deleteUser/:user_id').delete(userController.deleteUser); //works.
app.route('/forgetPassword').post(userController.forgetPassword);

//reviews
app.route('/addReview').post(reviewController.addReview); //works.
app.route('/displayReview/:restaurant_id').get(reviewController.getRestaurantReviews); //works.
app.route('/displayOneReview/:review_id').get(reviewController.getOneReview);
app.route('/displayReviews').get(reviewController.getReviews); //works.
app.route('/updateReview/:review_id').put(reviewController.updateReview); //works.
app.route('/deleteReview/:review_id').delete(reviewController.deleteReview); //works.
app.route('/deleteReview2/:user_id').delete(reviewController.deleteReview2);

//favourites
app.route('/addFavourite').post(favouriteController.addFavourite); //works.
app.route('/displayFavourites/:user_id').get(favouriteController.getFavourites); 
app.route('/deleteFavourite/:favourite_id').delete(favouriteController.deleteFavourite); //works.
app.route('/deleteFavourite2/:user_id').delete(favouriteController.deleteFavourite2);

app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); //