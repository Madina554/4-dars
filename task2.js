function createPost(image,title,tags) {
    const likes = Math.floor(Math.random() * 1000) + 1;
    const views = Math.floor(Math.random() * 1000) + 1;
    const post = {
        image: image,
        title: title,
        tags: tags,
        likes: likes,
        views: views
    };

    console.log(post);
}

createPost("photo.jpg", "Bugun zo'r kun", ["fun", "holiday"]);