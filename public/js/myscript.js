

// restaurant
function getAllRestaurants() {
    var response = "";
    var request = new XMLHttpRequest();

    request.open("GET", "/displayRestaurants", false);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {
            HTML += '<div class="col-sm-3.5">' +
                '<div class="restaurant-1">' +
                '<div class="restaurant-1-1">' +
                '<div class="columnRestaurantPic">' +
                '<a href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"><img class="restaurant-pics" src="' + response[i].restaurant_picture + '" width="92%"></a>' +
                '</div>' +
                '<div class="columnRestaurantText">' +
                '<h3 class="restaurant-name1">' + response[i].restaurant_name + '</h3>' +
                '<h6> OPENING HOURS: <br> ' + response[i].schedule_hours + '<br> TELEPHONE: <br>' + response[i].contact_no + ' </h6>' +
                '</div>' +
                '</div>' +
                '<div>' +
                '<a class="bottom-restaurant-words1" href="#"> ' + response[i].cuisine + ' </a>' +
                '<a class="bottom-restaurant-words1" href="#">  ' + response[i].price_range + '  </a>' +
                '<a class="bottom-restaurant-words1" href="#"> ' + response[i].type_of_dining + ' </a>' +
                '<a class="bottom-restaurant-words1" href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"> Read More </a>' +
                '</div>' +
                '</div>' +
                '</div>'
        }


        document.getElementById('restaurantList').innerHTML = HTML;
    };
    request.send();
}

function getAvgRating() {
    var response = "";
    var request = new XMLHttpRequest();
    var urlParams = new URLSearchParams(window.location.search);
    var restaurant_id = urlParams.get("restaurant_id");


    request.open("GET", "/getAvgRating/" + restaurant_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {
            HTML += '<span class="fa fa-star"></span> ' + response[i].average_rating + '</h6>'


        };
        document.getElementById('getAvgRating').innerHTML = HTML

    };

    request.send(JSON.stringify(response));
}




function getRestaurantDetails() {
    var response = "";
    var request = new XMLHttpRequest();

    var urlParams = new URLSearchParams(window.location.search);
    var restaurant_id = urlParams.get('restaurant_id');

    request.open("GET", "/restaurant/" + restaurant_id, false);
    request.setRequestHeader("Content-Type", "application/json");



    request.onload = function () {
        response = JSON.parse(request.responseText);
        sessionStorage.setItem('restaurant_name', response[0].restaurant_name);
        console.log(response);

        var HTML = ""
        for (let i = 0; i < response.length; i++) {
            HTML += '<div">' +
                '<div class="restaurant_info">' +
                '<div class="columnRestaurantPic1">' +
                '<img class="image3" src="' + response[i].restaurant_picture + '" width="91%">' +
                '</div>' +
                '<div class="columnRestaurantText1">' +
                '<h1 class="restaurant-name" id="Restaurant_name">' + response[i].restaurant_name + '</h1>' +
                '<h6 class="restaurant-text" id="getAvgRating"> <span class="fa fa-star"></span> </h6>' +
                '<h6 class="restaurant-text"> OPENING HOURS: <br> ' + response[i].schedule_hours + '</h6>' +
                '<h6 class="restaurant-text"> TELEPHONE: <br>' + response[i].contact_no + ' </h6>' +
                '</div>' +
                '<div class="columnRestaurantOth1">' +
                '<a class="bottom-restaurant-words" href="#" id="cuisine"> ' + response[i].cuisine + ' </a>' +
                '<a class="bottom-restaurant-words" href="#"> ' + response[i].price_range + ' </a>' +
                '<a class="bottom-restaurant-words" href="#"> ' + response[i].type_of_dining + ' </a>' +
                '<button type="button" class="button2c" id="addFavourite" onClick="addFavourite()"><span class="fa fa-heart heart"></span></button>' +
                '</div>' +
                '</div>' +
                '<br><br><br><br><br><br><br><br><br><br><br>' +
                '</div>' +
                '<div class="desc">' +
                '<div class="desc-words">' +
                '<h5 class="chg-color2">ADDRESS: </h5>' +
                '<h5 class="chg-color1">' + response[i].restaurant_address + '</h5>' +
                '<h5 class="chg-color2">DESCRIPTION: </h5>' +
                '<h5 class="chg-color1">' + response[i].description + '</h5>' +
                '</div>' +
                '</div>'
        }


        document.getElementById('restaurantInfo').innerHTML = HTML;
    };
    request.send();
}


// user

function login() {
    var response = "";

    var jsonData = new Object();
    jsonData.username = document.getElementById("username").value;
    jsonData.password = document.getElementById("password").value;
    var request = new XMLHttpRequest();

    request.open("POST", "/login", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);

        if (response.message == "fail") {
            alert('Invalid Credentials')
        }
        else if (response.message == "success") {
            sessionStorage.setItem('username', response.username);
            sessionStorage.setItem('user_id', response.user_id);

            window.location = "home2.html"
            alert('Welcome to Review.Hut')
        }
    };

    request.send(JSON.stringify(jsonData));
}

function logout() {
    let x = confirm('Are you sure you want to logout?')
    if (x == true) {
        sessionStorage.clear();
        location.replace("http://127.0.0.1:8080/login.html")
    }
}
function notloggedin(){
    if ((sessionStorage.length) == 0){
        location.replace('http://127.0.0.1:8080/login.html')
        alert('You are not logged in')
    }
}
function forgetPassword(random){
    var usernamecheck = document.getElementById("forgetusername").value;
    // console.log(usernamecheck)
    var emailcheck = document.getElementById ("forgetemail").value;
    // console.log(emailcheck)
    var user_array = random;

    var testrecover = 0
    var postRecover = new XMLHttpRequest ();
    postRecover.open ("POST", "/forgetpassword", true);
    for (i = 0; i < user_array.length; i++) {
        if (usernamecheck == user_array[i].username && emailcheck == user_array[i].email) {
            console.log("Password Recovery Successful!")
            testrecover = 1
            alert('Password Recovery Successful! Your password is: '+ user_array[i].password)
            location.replace("login.html")
        }}x
    if (document.getElementById("forgetusername").value.length == 0 ||
    document.getElementById("forgetemail").value.length == 0){
        alert('Missing Input.');
    }
    else if (testrecover == 0) {
        alert('Invalid Username or Email.')
    }
postRecover.send();
}

function getAllUsers() {
    var response = "";
    var request = new XMLHttpRequest();

    request.open("GET", "/displayUsers", false);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        forgetPassword(response)
    }
    request.send();
}

function signup() {
    var response = "";
    var user = new Object();

    user.username = document.getElementById("Username").value;
    user.email = document.getElementById("Email").value;
    user.password = document.getElementById("Password").value;
    user.user_address = document.getElementById("Address").value;
    user.gender = document.getElementById("Gender").value;
    user.mobile_number = document.getElementById("mobile_number").value;
    user.name = document.getElementById("full_name").value;

    var request = new XMLHttpRequest();

    request.open("POST", "/addUser", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        if (user.username, user.email, user.password, user.user_address, user.gender == '') {
            alert("Please Fill Up All The Text Boxes")
        }
        else if (response.affectedRows === 1) {
            alert('Sign up successful!');
            window.location = "login.html";
        }
        else {
            alert('Unsuccessful')
        }

    };

    request.send(JSON.stringify(user));
}


function getUser() {
    var response = "";
    var request = new XMLHttpRequest();

    var urlParams = new URLSearchParams(window.location.search);
    let user_id = sessionStorage.getItem('user_id');

    // request.onload = function(){
    //     user_array=JSON.parse(request.responseText);
    // };


    request.open("GET", "/displayUser/" + user_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);

        document.getElementById("username1").value = response[0].username;
        document.getElementById("email1").value = response[0].email;
        document.getElementById("address1").value = response[0].user_address;
        document.getElementById("mobile_number1").value = response[0].mobile_number;
        document.getElementById("name1").value = response[0].name;
        document.getElementById("gender1").value = response[0].gender;
        document.getElementById('user_picture').setAttribute("src", response[0].user_picture);
    };
    request.send();
}

// function updateUser() {
    // var response = "";
//     var user = new Object();

//     user.name = document.getElementById("name1").value;
//     user.user_address = document.getElementById("address1").value;
//     user.username = document.getElementById("username1").value;
//     user.email = document.getElementById("email1").value;
//     user.gender = document.getElementById("gender1").value;
//     user.mobile_number = document.getElementById("mobile_number1").value;
//     user.user_picture = 'default2.jpg'


//     var request = new XMLHttpRequest();
//     request.open("PUT", "/updateUser/" + sessionStorage.getItem("user_id"), true);
//     request.setRequestHeader("Content-Type", "application/json");

//     request.onload - function () {
//         response = JSON.parse(request.responseText);

//         if (response.affectedRows == 1) {
//             alert('Updated Successfully');
//             getUser()
//         }
//         else {
//             alert('Error')
//         }
//     };
//     request.send(JSON.stringify(user));
// }

// function updateUser() {

//     var response = "";
//     var user = new Object();
//     user.name = document.getElementById("name1").placeholder;
//     user.user_address = document.getElementById("address1").placeholder;
//     user.username = document.getElementById("username1").placeholder;
//     user.email = document.getElementById("email1").placeholder;
//     user.gender = document.getElementById("gender1").placeholder;
//     user.mobile_number = document.getElementById("mobile_number1").placeholder;

//     var request = new XMLHttpRequest();

//     request.open("PUT", "/updateUser/" + sessionStorage.getItem("user_id"), true);
//     request.setRequestHeader("Content-Type", "application/json");

//     request.onload = function () {
//         response = JSON.parse(request.responseText);

//         if (response.affectedRows === 1) {
//             alert('Updated successfully!');
//             window.location = "profile.html?user_id=" + sessionStorage.getItem("user_id");
//         }

//         else {
//             alert('Unable to update details, try again!')

//         }
//     };

//     request.send(JSON.stringify(user));
// }




// reviews
function getRestaurantReviews() {
    var response = "";
    var request = new XMLHttpRequest();

    var urlParams = new URLSearchParams(window.location.search);
    var restaurant_id = urlParams.get('restaurant_id');

    request.open("GET", "/displayReview/" + restaurant_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);

        sessionStorage.setItem('restaurant_id', response[0].restaurant_id);

        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {


            HTML += '<div class="col-sm-3.5">' +
                '<div class="review-0">' +
                '<h5 class="review-top">' +
                response[i].username + '  ' + response[i].rating + '/5' +
                '<button type="button" class="button2a" data-toggle="modal" data-target="#reviewModal2" onclick="getOneReview(' + response[i].review_id + ')"><span class="fa fa-pencil"></span></button>' +
                '<button type="button" class="button2b" id="deleteReview" item="' + i + '" onClick="deleteCall(this)"><span class="fa fa-trash"></span></button>' +
                '</h5>' +
                '<div class="review-1-1">' + response[i].review +
                '</div>' +
                '<h6 class="review-bottom">' + response[i].datePosted + '</h6>' +
                '</div>' +
                '</div>'
        }
        document.getElementById('restaurantReviews').innerHTML = HTML;
    };
    request.send();
}

function addReview() {
    var response = "";

    var urlParams = new URLSearchParams(window.location.search);
    var restaurant_id = urlParams.get('restaurant_id');

    var jsonData = new Object();
    jsonData.review = document.getElementById("Review").value;
    jsonData.rating = document.getElementById("Rating").value;
    jsonData.restaurant_id = restaurant_id;
    jsonData.user_id = sessionStorage.getItem('user_id')
    jsonData.restaurant_name = sessionStorage.getItem('restaurant_name')

    var request = new XMLHttpRequest();

    request.open("POST", "/addReview", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.affectedRows == 1) {
            alert("Added Successfully!")
        }
        else {
            alert("Error")
        }
    };

    request.send(JSON.stringify(jsonData));
}




function getOneReview(review_id) {
    
    var response = "";
    var request = new XMLHttpRequest();


    request.open("GET", "/displayOneReview/" + review_id, true);
    request.setRequestHeader("Content-Type", "application/json");


    request.onload = function () {
        sessionStorage.setItem('review_id', review_id)
        response = JSON.parse(request.responseText);
        
        document.getElementById('Review1').value = response[0].review;
        document.getElementById('Rating1').value = response[0].rating;
        console.log(response)


    };
    request.send();
}

function updateReview() {

    var response = new Object();
    response.rating = document.getElementById("Rating1").value;
    response.review = document.getElementById("Review1").value;
    response.restaurant_id = sessionStorage.getItem("restaurant_id")
    response.user_id = sessionStorage.getItem("user_id")
    response.username = sessionStorage.getItem("username")
    
    var request = new XMLHttpRequest();

    request.open("PUT", "/updateReview/" + sessionStorage.getItem("review_id"), true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload - function () {
        response = JSON.parse(request.responseText);

        if (response.affectedRows == 1) {
            alert('Updated Successfully');
            getRestaurantReviews()
        }
         else {
            alert('Error')
        }
    };
    request.send(JSON.stringify(response));
}


    


function deleteReview() {
    var response = "";

    var request = new XMLHttpRequest();

    request.open("DELETE", "/deleteReview/" + sessionStorage.getItem("review_id"), true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.affectedRows == 1) {
            alert("Deleted Successfully!")
        }
        else {
            alert("Error")
        }
    };

    request.send();
}

function deleteCall(deleteReview2) {
    var item = deleteReview2.getAttribute("item");
    sessionStorage.setItem('reviewPosition', item);
    var review = "";


    var urlParams = new URLSearchParams(window.location.search);
    var restaurant_id = urlParams.get('restaurant_id');

    var request = new XMLHttpRequest();

    request.open("GET", "/displayReview/" + restaurant_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        review = JSON.parse(request.responseText);
        sessionStorage.setItem('review_id', review[item].review_id)
        deleteReview()
        console.log(review)
    }
    request.send();
}

function deleteReview2(delete4) {
    var response = confirm("Do you want to delete all your reviews?");
    var user_id = delete4.getAttribute('item')
   
    if (response === true) {
        var request = new XMLHttpRequest();
        request.open("DELETE", "/deleteReview2/" + sessionStorage.getItem("user_id"), true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() {
         
        }
        request.send();
    } 
}


//Favourite

function getFavourites() {
    var response = "";
    var request = new XMLHttpRequest();

    let user_id = sessionStorage.getItem('user_id');

    request.open("GET", "/displayFavourites/" + user_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        sessionStorage.setItem('favourite_id', response[0].favourite_id)
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {
            HTML += '<div class="col-sm-3.5">' +
            '<div class="restaurant-1">' +
            '<div class="restaurant-1-1">' +
            '<div class="columnRestaurantPic">' +
            '<a href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"><img class="restaurant-pics" src="' + response[i].restaurant_picture + '" width="92%"></a>' +
            '</div>' +
            '<div class="columnRestaurantText">' +
            '<h3 class="restaurant-name1">' + response[i].restaurant_name + '</h3>' +
            '<h6> OPENING HOURS: <br> ' + response[i].schedule_hours + '<br> TELEPHONE: <br>' + response[i].contact_no + ' </h6> ' +
            '</div>' +
            '</div>' +
            '<div>' +
            '<button type="button" class="button2d" id="Favourites" onClick="deleteFavourite(this)" item = "'+response[i].favourite_id+'"><span class="fa fa-trash trash"></span></button>' +
            '<a class="bottom-restaurant-words1" href="#"> ' + response[i].cuisine + ' </a>' +
            '<a class="bottom-restaurant-words1" href="#">  ' + response[i].price_range + '  </a>' +
            '<a class="bottom-restaurant-words1" href="#"> ' + response[i].type_of_dining + ' </a>' +
            '<a class="bottom-restaurant-words1" href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"> Read More </a>' +
            '</div>' +
            '</div>' +
            '</div> ' 
        }
        document.getElementById('favouritesList').innerHTML = HTML;
    };
    request.send();
}

function addFavourite() {
    var response = "";

    var urlParams = new URLSearchParams(window.location.search);
    var favourite_id = urlParams.get('favourite_id');

    var jsonData = new Object();
    jsonData.restaurant_name = document.getElementById("Restaurant_name").value;
    jsonData.favourite_id = favourite_id;
    jsonData.restaurant_id = sessionStorage.getItem('restaurant_id')
    jsonData.Restaurant_restaurant_id = sessionStorage.getItem('restaurant_id')
    jsonData.user_id = sessionStorage.getItem('user_id')
    jsonData.restaurant_name = sessionStorage.getItem('restaurant_name')

    var request = new XMLHttpRequest();

    request.open("POST", "/addFavourite", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.affectedRows == 1) {
            alert("Added Successfully!")
        }
        else {
            alert("Error")
        }
    };

    request.send(JSON.stringify(jsonData));
}

function deleteFavourite(delete2) {
    var response = confirm("Do you want to delete this restaurant from your favourites?");
    var favourite_id = delete2.getAttribute('item')
   
    if (response === true) {
        var request = new XMLHttpRequest();
        request.open("DELETE", "/deleteFavourite/" + sessionStorage.getItem("favourite_id"), true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() {
         
        }
        request.send();
    } 
}

// function deleteFavourite2(delete3) {
//     var response = confirm("Do you want to delete all your favourites?");
//     var user_id = delete3.getAttribute('item')
   
//     if (response === true) {
//         var request = new XMLHttpRequest();
//         request.open("DELETE", "/deleteFavourite2/" + sessionStorage.getItem("user_id"), true);
//         request.setRequestHeader("Content-type", "application/json");
//         request.onload = function() {
         
//         }
//         request.send();
//     } 
// }

// filter, search

function search() {
	var response = "";
	var search = document.getElementById("searchBar").value;

	var request = new XMLHttpRequest();
	request.open("GET", "/search/" + search, true);
	request.setRequestHeader("Content-Type", "application/json");

	request.onload = function() {
		response = JSON.parse(request.responseText);
        console.log(response);
		var HTML = "";
		for (var i = 0; i < response.length; i++) {
			HTML += '<div class="col-sm-3.5">' +
            '<div class="restaurant-1">' +
            '<div class="restaurant-1-1">' +
            '<div class="columnRestaurantPic">' +
            '<a href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"><img class="restaurant-pics" src="' + response[i].restaurant_picture + '" width="92%"></a>' +
            '</div>' +
            '<div class="columnRestaurantText">' +
            '<h3 class="restaurant-name1">' + response[i].restaurant_name + '</h3>' +
            '<h6> OPENING HOURS: <br> ' + response[i].schedule_hours + '<br> TELEPHONE: <br>' + response[i].contact_no + ' </h6>' +
            '</div>' +
            '</div>' +
            '<div>' +
            '<a class="bottom-restaurant-words1" href="#"> ' + response[i].cuisine + ' </a>' +
            '<a class="bottom-restaurant-words1" href="#">  ' + response[i].price_range + '  </a>' +
            '<a class="bottom-restaurant-words1" href="#"> ' + response[i].type_of_dining + ' </a>' +
            '<a class="bottom-restaurant-words1" href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"> Read More </a>' +
            '</div>' +
            '</div>' +
            '</div>'
		}
		
		document.getElementById("restaurantList").innerHTML = HTML;
    };
	
	request.send();
}

// function filterCuisine() {
	
// 	var response = "";
// 	var cuisine = document.getElementById("cuisine").value;
//     console.log(cuisine)
	
// 	var request = new XMLHttpRequest();
// 	request.open("GET", "/" + cuisine, true);
// 	request.setRequestHeader("Content-Type", "application/json");
	
// 	request.onload = function() {
// 		response = JSON.parse(request.responseText);
//         console.log(response);
// 		var HTML = "";
// 		for (var i = 0; i < response.length; i++) {
// 			HTML += '<div class="col-sm-3.5">' +
//             '<div class="restaurant-1">' +
//             '<div class="restaurant-1-1">' +
//             '<div class="columnRestaurantPic">' +
//             '<a href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"><img class="restaurant-pics" src="' + response[i].restaurant_picture + '" width="92%"></a>' +
//             '</div>' +
//             '<div class="columnRestaurantText">' +
//             '<h3 class="restaurant-name1">' + response[i].restaurant_name + '</h3>' +
//             '<h6> OPENING HOURS: <br> ' + response[i].schedule_hours + '<br> TELEPHONE: <br>' + response[i].contact_no + ' </h6>' +
//             '</div>' +
//             '</div>' +
//             '<div>' +
//             '<a class="bottom-restaurant-words1" href="#"> ' + response[i].cuisine + ' </a>' +
//             '<a class="bottom-restaurant-words1" href="#">  ' + response[i].price_range + '  </a>' +
//             '<a class="bottom-restaurant-words1" href="#"> ' + response[i].type_of_dining + ' </a>' +
//             '<a class="bottom-restaurant-words1" href="RestaurantDesc.html?restaurant_id=' + response[i].restaurant_id + '"> Read More </a>' +
//             '</div>' +
//             '</div>' +
//             '</div>'
// 		}
		
// 		document.getElementById("restaurantList").innerHTML = HTML;
//     };
	
// 	request.send();
// }

