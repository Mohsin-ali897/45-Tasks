// lower case 
let personName: string = "Mohsin"
console.log("lower case:", personName.toLowerCase());

// upper case 
console.log("upper case:", personName.toUpperCase());

//  title case
console.log("tittle case:",personName.replace(/\bw/g,c =>c.toUpperCase()));