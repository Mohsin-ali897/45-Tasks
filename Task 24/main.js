var name_1 = "mustafa1";
var name_2 = "mustafa2";
var name_3 = "mustafa3";
if (name_1 != name_1) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
if (name_1 == name_2) {
    console.log("names are equal");
}
;
if (name_1 != name_3) {
    console.log("names are equal");
}
;
var age_1 = 18;
var age_2 = 20;
if (age_1 == 18) {
    console.log("are eligible");
}
if (age_2 != 22) {
    console.log("eligible for vote as older catagory");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 && age_2 != 22) {
    console.log("person is not eligible for vote");
}
var country = ["pakistan", "india", "japan", "china"];
// if (country.includes("pakistan")){
//     console.log("pakistan is in contry list");
// }
if (!country.includes("America")) {
    console.log("America in not include in contry list");
}
