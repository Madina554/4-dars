function createCharacter(name, power){
    const level = Math.floor(Math.random() * 10) + 1;
    console.log(`
    name: ${name},
    power: ${power},
    level: ${level},
    info: ${level}-darajali ${name}, kuchi: ${power}`);
}
createCharacter("Thanos", 100);