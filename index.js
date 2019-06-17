'use strict';

const key = 'afcf621fab2f7cabbd6a33d63f65bf8b2a244197';
//const searchURL = '/users/:username/repos';


function getHandle(searchTerm) {
  console.log('searchterm:', searchTerm)
  fetch(`https://api.github.com?type=owner&sort=${searchTerm}&direction=desc`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log('display response: ', responseJson);
  $('#repos-list').append(`<li>${responseJson.user_repositories_url}</li>`);
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
