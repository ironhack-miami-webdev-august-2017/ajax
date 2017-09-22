$(document).ready(() => {
    $('.fetch-klang').click(() => {
        getPokemonInfo(600);
    });

    $('.pokemon-search').submit((myEvent) => {
        myEvent.preventDefault();

        const idFromInput = $('#poke-id').val();
        getPokemonInfo(idFromInput);
    });
});


function getPokemonInfo (pokemonId) {

    // $.ajax() is a jQuery function
    $.ajax(
      // 1 argument -> settings object
      {
          url: 'http://pokeapi.co/api/v2/pokemon/' + pokemonId + '/',
          method: 'GET',

          // what to do when everything works (we get the data)
          success: (infoFromApi) => {
              // start by displaying the variable you got from the API
              console.log('Pokemon fetch SUCCESS! 🙌🏽');
              console.log( infoFromApi );

              var secondTypeOrNot = "";

              if (infoFromApi.types.length === 2) {
                  secondTypeOrNot =
                    `<p> Type #2: ${infoFromApi.types[1].type.name} </p>`;
              }

              $('.pokemon-details').html(`
                  <h2> ${infoFromApi.name} </h2>
                  <img src="${infoFromApi.sprites.front_default}">
                  <p> Type #1: ${infoFromApi.types[0].type.name} </p>
                  ${secondTypeOrNot}
              `);
          },

          // what to do when the request errors (we didn't get the data)
          error: (errorInfo) => {
              console.log('Pokemon fetch ERROR! 🚨');
              console.log( errorInfo );
          }
      }
    );

}
