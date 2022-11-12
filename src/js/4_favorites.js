'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function addCharacterListeners() {
  const allCharacterItems = document.querySelectorAll(
    `.${classListItemAllCharacters}`
  );
  for (const item of allCharacterItems) {
    item.addEventListener('click', handleFavoriteClick);
  }
}

function handleFavoriteClick(event) {
  const favoriteId = parseInt(event.currentTarget.id);

  const favoriteCharacter = allCharacters.find(
    (character) => character.char_id === favoriteId
  );

  const characterInFavouritesIndex = favCharacters.findIndex(
    (character) => character.char_id === favoriteId
  );

  if (characterInFavouritesIndex === -1) {
    favCharacters.push(favoriteCharacter);
  } else {
    favCharacters.splice(characterInFavouritesIndex, 1);
  }

  localStorage.setItem('favCharactersLS', JSON.stringify(favCharacters));

  event.currentTarget.classList.toggle('favorite');

  console.log(favCharacters.length);

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
