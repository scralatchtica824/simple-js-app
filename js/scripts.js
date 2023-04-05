alert('Hello world - Click here so see the beginning of my Pokémon project!');

//this is defining the name, height, weight and types of pokemon in an array, wrapping it in an IIFE and making it print on the screen
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Venusaur', height: 2, weight: 100, types: ['grass', 'poison']},
    { name: 'Charizard', height: 1.7, weight: 90.5, types: ['monster', 'dragon']},
    { name: 'Blastoise', height: 1.6, weight: 88.5, types: ['monster', 'water']},
    { name: 'Raichu', height: 0.8, weight: 30, types: ['field', 'fairy']},
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


pokemonRepository.getAll().forEach(function(pokemon){ 
  document.write('<p>' + pokemon.name + " Height:" + pokemon.height + "m Weight:" + pokemon.weight + " Types:" + pokemon.types)
})
