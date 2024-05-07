var users = ["admin", "Haseeb", "Hassan", "Yasoob", "haider"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello Admin would you like to see a status of report");
    }
    else {
        console.log("hello ".concat(user, " thank you for logging in again"));
    }
}
