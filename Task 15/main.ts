let guestARR :string[] =["Mohsin","Mustafa","Baksh Ali","Fasih"];
let canNotAttend :string ="Mohsin";
console.log(canNotAttend + "" "can not attend the dinner");
let newGuest :string="Fasih";
guestARR [guestARR.indexOf(canNotAttend)] =newGuest;
//console.log(guestARR);
guestARR.map((items)=>console.log(`Dear ${items} you are inivited to the dinner`)
)
