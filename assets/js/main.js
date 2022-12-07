

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>`;
}

const pokemonsContainer = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemonList) => {
    const listItems = [];

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listItems.push(convertPokemonToHTML(pokemon));
    }
    console.log(listItems);
})

console.log(10 + 90);