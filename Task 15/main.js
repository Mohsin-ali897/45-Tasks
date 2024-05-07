var guestARR = ["Mohsin", "Mustafa", "Baksh Ali", "Fasih"];
var canNotAttend = "Mohsin";
console.log(canNotAttend + "", "can not attend the dinner");
var newGuest = "Fasih";
guestARR[guestARR.indexOf(canNotAttend)] = newGuest;
//console.log(guestARR);
guestARR.map(function (items) { return console.log("Dear ".concat(items, " you are inivited to the dinner")); });
