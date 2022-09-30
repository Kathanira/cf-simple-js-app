
/*let pokemonList = [
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
}*/

let pokemonRepository =(function(){
    let pokemonList = [
        { name: 'Balbasure', 
        height: 7, 
        type: ['grass', 'poison'] },

        { name: 'Charizard', 
        height: 2, 
        type: ['fire', 'flying'] },

        { name: 'Mightyena', 
        height: 1.7, 
        type: 'dark' }
    ]

    function getAll() {
        return pokemonList;
      }

      function add(pokemon) { 
        if (typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      }
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');
        
        let button = document.createElement('button');
        button.innerText = pokemon.name
        button.classList.add('button-class');
    
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function(event) {
			showDetails(pokemon)
		})
	}

	function showDetails(pokemon) {
		console.log(pokemon);
    }
        

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
      }

})()

pokemonRepository.add({name:'Fearow', height: 1.2, type:['normal', 'flying']});


pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
})

/*let container = document.querySelector('.container');
container.innerHTML = '<button>Click Me</button>';
console.log(container.innerHTML);*/

/* if(pokemon.height >= 5) {
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemon.height >= 2 && pokemon.height < 5){
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemon.name + " (height: " + pokemon.height + " m)- That is a small pokemon!" + "<br>")
    }  */