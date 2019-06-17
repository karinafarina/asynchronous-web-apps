'use strict';

const key = 'afcf621fab2f7cabbd6a33d63f65bf8b2a244197';
//const searchURL = '/users/:username/repos';


function getHandle(searchTerm) {
  console.log('searchterm:', searchTerm)
  fetch(`https://api.github.com/users/${searchTerm}/repos`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log('display response: ', responseJson);
    for(i=0; i < responseJson.length; i++) {
    $('#repos-list').append(`<li>${responseJson.name}</li>`);
    }
  $('#repos').removeClass(' hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();

    getHandle(searchTerm);
  })
}


$(watchForm);
