let guestArr : string [] = ["Mustafa","Mohsin","Shoaib","Naeem"];

let canNotAttend : string = "Baksh ali"

let newGuset : string  = "yasoob"
guestArr[guestArr.indexOf(canNotAttend)] =newGuset;

// console.log(guestArr);

// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`))

// =====part 2=====
let guestBeg : string= "musu"
guestArr.unshift(guestBeg)
// console.log(guestArr);

// ======part 3======
let middleGuest : string = "Hassan"
let middleIndex = guestArr.length/3 
guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr);
// // ===part 4===

guestArr.push("Hyder")

console.log(guestArr);

//====part 5====

guestArr.map((items)=>
console.log(`Dear ${items}, you are invited in the more people catagory on dinner`))
