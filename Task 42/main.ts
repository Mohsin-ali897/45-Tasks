function make_great(magicians: string[]): void {
    for (let i= 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + 'the great'
    }
}



const magicians2: string[] = ["Haseeb", "Abdullah", "Hussain"];
make_great(magicians2)
console.log(magicians2);
