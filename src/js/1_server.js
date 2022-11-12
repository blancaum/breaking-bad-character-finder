'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function fetchCharacters() {
  fetch('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      allCharacters = data;
      saveToLocal(allCharacters, 'allCharactersLS');
      renderCharacters(
        allCharacters,
        listCharactersElement,
        'main__characters__list__item'
      );
    });
}

function fetchSearchCharacters(searchText) {
  fetch(`https://breakingbadapi.com/api/characters?name=${searchText}`)
    .then((response) => response.json())
    .then((data) => {
      foundCharacters = data;
      renderCharacters(
        foundCharacters,
        listCharactersElement,
        'main__characters__list__item'
      );
    });
}
