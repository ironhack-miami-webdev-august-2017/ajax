$(document).ready(() => {
    $('.post-wall-e').click(() => {
        // the keys of this object match what the API needs
        const wallEInfo = {
            name: 'WALL-E',
            occupation: 'Waste Allocation Robot',
            weapon: 'Head laser'
        };

        postCharacter( wallEInfo );
    });
});


function postCharacter (characterSubmission) {

    $.ajax({
        url: 'https://ih-api.herokuapp.com/characters',
        method: 'POST',

        // the "data" AJAX setting is how we send data to an API
        data: characterSubmission,

        success: (postResult) => {
            console.log('POST WALL-E success! 🤖');
            console.log( postResult );

            $('.character-list').append(`
                <li>
                  <h3> ${postResult.name} </h3>
                  <p> ID: ${postResult.id} </p>
                  <p> Occupation: ${postResult.occupation} </p>
                  <p> Weapon: ${postResult.weapon} </p>
                  <p> Debt: ${postResult.debt} </p>
                </li>
            `);
        },

        error: (errorInfo) => {
            console.log('POST WALL-E FAILURE! 💩');
            console.log( errorInfo );
        }
    });

}
