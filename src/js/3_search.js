'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function handleSearchClick(event) {
  event.preventDefault();
  const searchText = searchInput.value.toLowerCase();
  if (allCharacters) {
    foundCharacters = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchText)
    );
    renderCharacters(
      foundCharacters,
      listCharactersElement,
      classListItemAllCharacters
    );
  } else {
    fetchSearchCharacters(searchText);
  }
}

function handleInput(event) {
  event.preventDefault();
  const searchText = searchInput.value;
  if (!searchText) {
    handleSearchClick(event);
  }
}

searchBtn.addEventListener('click', handleSearchClick);

searchInput.addEventListener('input', handleInput);
