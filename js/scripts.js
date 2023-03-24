alert('Hello world - Click here so see the beginning of my Pokémon project!');

//this is defining the name, height, weight and types of pokemon in an array
let pokemonList = [
    { name: 'Venusaur', height: 2, weight: 100, types: ['grass', 'poison']},
    { name: 'Charizard', height: 1.7, weight: 90.5, types: ['monster', 'dragon']},
    { name: 'Blastoise', height: 1.6, weight: 88.5, types: ['monster', 'water']},
    { name: 'Raichu', height: 0.8, weight: 30, types: ['field', 'fairy']},
  ];

  /*loop through to display the name and height of the pokemon on seperate lines. 
  If the pokemon is over 1.6m in height it will display that it's a large pokemon!
  */
 
  for (let i = 0; i < pokemonList.length; i++) {
    let pokemonData = '<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + 'm)';
    if (pokemonList[i].height > 1.6){
      pokemonData += ' - This is a Large Pokemon!'
    }
    
    pokemonData += '</p>';
    document.write(pokemonData);
}