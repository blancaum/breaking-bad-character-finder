'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//Función que quita el mensaje de "Added to favorites"
const removeMsg = () => {
  favMessage.classList.add('hidden');
};

/***Handle Characters***/
function addCharacterListeners() {
  const allCharacterItems = document.querySelectorAll(
    `.${classListItemAllCharacters}`
  );
  for (const item of allCharacterItems) {
    item.addEventListener('click', handleCharactersClick);
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
    favMessage.classList.remove('hidden');
    setTimeout(removeMsg, 3000);
  } else {
    favCharacters.splice(characterInFavouritesIndex, 1);
    favoriteElement.classList.remove('favorite');
  }

  localStorage.setItem('favCharactersLS', JSON.stringify(favCharacters));

  if (favCharacters.length > 0) {
    sectionFavoritesElement.classList.remove('hidden');
    btnGoFav.classList.remove('hidden');
    renderFavorites(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters
    );
  } else {
    sectionFavoritesElement.classList.add('hidden');
    btnGoFav.classList.add('hidden');
  }
}

/***END Handle Characters***/

/***Handle Favorites***/
function addFavoriteListeners() {
  const favRemoveIcons = document.querySelectorAll(`.${classRemoveIcon}`);
  for (const icon of favRemoveIcons) {
    icon.addEventListener('click', handleFavoritesClick);
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
    btnGoFav.classList.remove('hidden');
    renderFavorites(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters
    );
  } else {
    sectionFavoritesElement.classList.add('hidden');
    btnGoFav.classList.add('hidden');
  }

  renderCharacters(
    allCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
}

/***END Handle Favorites***/

/***Reset Favorites***/

btnResetFav.addEventListener('click', handleResetClick);

function handleResetClick(event) {
  //limpiar array de favoritos
  favCharacters = [];
  //limpiar favs de local storage
  localStorage.removeItem('favCharactersLS');
  //volver a pintar fav
  renderFavorites(
    favCharacters,
    listFavoritesElement,
    classListItemFavCharacters
  );
  //volver a pintar personajes
  renderCharacters(
    allCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
  //esconder sección de favoritos
  sectionFavoritesElement.classList.add('hidden');
  btnGoFav.classList.add('hidden');
}
