'use strict';

const key = 'afcf621fab2f7cabbd6a33d63f65bf8b2a244197';
//const searchURL = '/users/:username/repos';


function getHandle(searchTerm) {
  fetch('https://api.github.com?type=owner&sort=full_name&direction=desc')

  .then(response => response.json())
  console.log(responseJson)
  .then(responseJson => displyaResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();

    getHandle(searchTerm);
  })
}


$(watchForm)
