function createVideo(title, duration) {
    const views = Math.floor(Math.random() * 10000) + 1000;
    const likes = Math.floor(Math.random() * 10000) + 1000;
    const dislike = Math.floor(Math.random() * 10000);
    const natija = {
        title: title,
            duration: duration,
                views: views,
                    likes:likes,
                        dislike:dislike
    }
    return natija;
}
console.log(createVideo("JavaScript Tutorial", "10:15"));