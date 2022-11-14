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
  const favRemoveIcons = document.querySelectorAll(`.${classRemoveIcon}`);
  for (const icon of favRemoveIcons) {
    icon.addEventListener('click', handleFavoritesClick);
  }
}

function handleCharactersClick(event) {
  const favoriteElement = event.currentTarget;
  const favoriteId = parseInt(favoriteElement.id);

  const favoriteCharacter = allCharacters.find(
    (character) => character.char_id === favoriteId
  );

  const characterInFavouritesIndex = favCharacters.findIndex(
    (character) => character.char_id === favoriteId
  );

  if (characterInFavouritesIndex === -1) {
    favCharacters.push(favoriteCharacter);
    favoriteElement.classList.add('favorite');
  } else {
    favCharacters.splice(characterInFavouritesIndex, 1);
    favoriteElement.classList.remove('favorite');
  }

  localStorage.setItem('favCharactersLS', JSON.stringify(favCharacters));

  if (favCharacters.length > 0) {
    sectionFavoritesElement.classList.remove('hidden');
    renderFavorites(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters
    );
  } else {
    sectionFavoritesElement.classList.add('hidden');
  }
}

function handleFavoritesClick(event) {
  const favoriteElement = event.currentTarget.parentElement;
  const favoriteId = parseInt(favoriteElement.id);

  const favoriteCharacter = allCharacters.find(
    (character) => character.char_id === favoriteId
  );

  const characterInFavouritesIndex = favCharacters.findIndex(
    (character) => character.char_id === favoriteId
  );

  if (characterInFavouritesIndex === -1) {
    favCharacters.push(favoriteCharacter);
    favoriteElement.classList.add('favorite');
  } else {
    favCharacters.splice(characterInFavouritesIndex, 1);
    favoriteElement.classList.remove('favorite');
  }

  localStorage.setItem('favCharactersLS', JSON.stringify(favCharacters));

  if (favCharacters.length > 0) {
    sectionFavoritesElement.classList.remove('hidden');
    renderFavorites(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters
    );
  } else {
    sectionFavoritesElement.classList.add('hidden');
  }

  renderCharacters(
    allCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
}
