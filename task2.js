function createPost(image,title,tags) {
        this.image= image,
        this.title= title,
        this.tags=tags,
        this.likes = Math.floor(Math.random() * 1000) + 1;
        this.views = Math.floor(Math.random() * 1000) + 1;
    };


let post1 = new createPost("photo.jpg", "Bugun zo'r kun", ["fun", "holiday"]);
console.log(post1);