function createTrack(title, artist) {
    const listens = Math.floor(Math.random() * (100000-1000) + 1000);
    const isPopular = listens;
    if (isPopular >= 50000) {
        isPopular = "true";
    } else {
        isPopular = "false";
    }
    const natija = {
        title: title,
            artist:artist,
                listens: listens,
                    duration: "3:54",
                        isPopular:isPopular
    }
    return natija;
}
console.log(createTrack("Shape of You", "Ed Sheeran"));
