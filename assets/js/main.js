function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.img}"
                    alt="${pokemon.name}">
            </div>
        </li>`;
}

const pokemonsContainer = document.getElementById('pokemonList');
const loadBtn           = document.getElementById('loadMore-btn');
let offset      = 0;
let limit       = 5;
let maxItems    = 151;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHTML = pokemonList.map(convertPokemonToHTML).join('');
        pokemonsContainer.innerHTML += newHTML;
    });
}

loadPokemonItems(offset, 5);

loadBtn.addEventListener('click', () => {
    offset += limit;
    const qtdNextPage = offset + limit;

    if (qtdNextPage >= maxItems) {
        loadPokemonItems(offset, maxItems - offset);
        loadBtn.parentElement.removeChild(loadBtn);
    } else {
        loadPokemonItems(offset, 5);
    }
});