function makeSandwich(item) {
    console.log('\nMaking Your Sandwich with: ');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("enjoy your sandwich !\n");
}
makeSandwich(['jam', 'chesse', 'Butter']);
makeSandwich(['bread', 'olive']);
makeSandwich(['Chocolate butter', 'peanut butter']);
