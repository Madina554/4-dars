function createProfile(name, age) {
    const avatars = ["avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png"];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
    const joinDate = new Date().toISOString().slice(0, 10);
    const natija = {
        name: name,
        age: age,
        avatar: avatar,
        joinDate: joinDate,
        status: "online"
    }
    return natija;
}
console.log(createProfile("Alex", 25));