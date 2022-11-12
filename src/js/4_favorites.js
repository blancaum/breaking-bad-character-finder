'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function addCharacterListeners() {
  const allCharacterItems = document.querySelectorAll(
    `.${classListItemAllCharacters}`
  );
  for (const item of allCharacterItems) {
    item.addEventListener('click', handleCharactersClick);
  }
}

function addFavoriteListeners() {
  const favCharacterItems = document.querySelectorAll(
    `.${classListItemFavCharacters}`
  );
  for (const item of favCharacterItems) {
    item.addEventListener('click', handleFavoritesClick);
  }
}

function handleCharactersClick(event) {
  const favoriteId = parseInt(event.currentTarget.id);

  const favoriteCharacter = allCharacters.find(
    (character) => character.char_id === favoriteId
  );

  const characterInFavouritesIndex = favCharacters.findIndex(
    (character) => character.char_id === favoriteId
  );

  if (characterInFavouritesIndex === -1) {
    favCharacters.push(favoriteCharacter);
    event.currentTarget.classList.add('favorite');
  } else {
    favCharacters.splice(characterInFavouritesIndex, 1);
    event.currentTarget.classList.remove('favorite');
  }

  localStorage.setItem('favCharactersLS', JSON.stringify(favCharacters));

  if (favCharacters.length > 0) {
    sectionFavoritesElement.classList.remove('hidden');
    renderCharacters(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters
    );
  } else {
    sectionFavoritesElement.classList.add('hidden');
  }
}

function handleFavoritesClick(event) {
  handleCharactersClick(event);

  renderCharacters(
    allCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
}
