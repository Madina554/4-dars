function createCommit(message,files) {
    const date = new Date().toISOString().slice(0, 10);
    const id = Math.random().toString(36).substring(2, 10);
    const natija = {
        message: message,
        files: files,
        date: date,
        id: id,
        author: "User"  
    }
    return natija;
}
console.log(createCommit("Add new features", ["app.js", "style.css"]));