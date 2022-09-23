
let pokemonList = [
    { name: 'Balbasure', height: 7, type: ['grass', 'poison'] },
    { name: 'Charizard', height: 2, type: ['fire', 'flying'] },
    { name: 'Mightyena', height: 1.7, type: 'dark' }
];
for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 5) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemonList[i].height >= 2 && pokemonList[i].height < 5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a small pokemon!" + "<br>")
    }
}