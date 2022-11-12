'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function fetchCharacters() {
  fetch('https://breakingbadapi.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      allCharacters = data;

      renderCharacters(
        allCharacters,
        listCharactersElement,
        'main__characters__list__item'
      );
    });
}
