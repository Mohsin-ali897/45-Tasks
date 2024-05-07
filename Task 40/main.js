function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
var album = makeAlbum("Hassan", "light");
console.log(album);
album = makeAlbum("Mustafa", "red wave");
console.log(album);
album = makeAlbum("Mohsin Ali", "seenbreeze");
console.log(album);
