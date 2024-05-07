function make_great2(magicians: string[]): string[]{
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' ' + 'the great');
    }
    return greatMagicians;
    }
    
    
    const magicians3: string[] = ["Ahmed","Mustafa","Mohsin"];
    const greatMagicians2: string[] = make_great2(magicians3);
    console.log(magicians3);
    console.log(greatMagicians2);