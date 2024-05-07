var users = ["Admin", "Mustafa", "Azeem", "Abdullah"];
if (users.length === 0) {
    console.log("we need to find some users");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(user, ", thank you for logging in again "));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users");
}
