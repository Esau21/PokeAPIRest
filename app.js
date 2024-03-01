const pokemonContainer = document.getElementById("pokemonContainers");
function getPokemon(pokemonId) {
  //Devolvemos la promesa del resultado de la solicitud fetch
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        name: data.name,
        ImageUrl: data.sprites.front_default
      }
    });
}

async function showPokemons() {
  for (let i = 1; i <= 151; i++) {
    const pokemon = await getPokemon(i);
    const cardHtml = `
    <div class="col-lg-3 mb-3">
        <div class="card">
            <div class="card-header">
                <p>${pokemon.name}</p>
            </div>
            <div class="card-body">
                <img src="${pokemon.ImageUrl}" class="image" alt="${pokemon.name}">
            </div>
        </div>
    </div>
    `;
    pokemonContainer.innerHTML += cardHtml;
  }
}

showPokemons();

//Hacemos un bucle for para poder obtener los primeros 151 pokemonos

/* for (let i = 1; i <= 151; i++) {
  //Invocamos la funcion para poder traer todos los pokemon

  getPokemon(i).then((pokemon) => {
    console.log(pokemon);

    //Creamos un nuevo elemento de tarjeta para cada pokemon
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const cardHedaer = document.createElement("div");
    cardHedaer.classList.add("card-header");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = pokeImage.src;
    image.alt = "Pokemon";

    cardHedaer.appendChild(namepokemon.cloneNode(true));
    cardBody.appendChild(image);
    newCard.appendChild(cardHedaer);
    newCard.appendChild(cardBody);

    document.body.appendChild(newCard);
  })
}
 */
