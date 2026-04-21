"use strict";

class User {
    constructor(user_id, name, user_address, username, password, email, gender, mobile_number, user_picture) {
        this.user_id = user_id;
        this.name = name;
        this.user_address = user_address;
        this.username = username;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.user_picture = user_picture;
    }

    getUserId() {
        return this.user_id;
    }

    getName() {
        return this.name;
    }

    getUserAddress() {
        return this.user_address;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getEmail() {
        return this.email;
    }

    getGender() {
        return this.gender;
    }

    getMobileNumber() {
        return this.mobile_number;
    }

    getUserPicture() {
        return this.user_picture;
    }

}

module.exports = User;