'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

  if (!isCharacterInFavorites(favoriteId)) {
    favCharacters.push(favoriteCharacter);
    addFavoriteClass(favoriteElement);
    showFavMsg();
    setTimeout(hideFavMsg, 3000);
  } else {
    const favIndex = getFavIndex(favoriteId);
    favCharacters.splice(favIndex, 1);
    removeFavoriteClass(favoriteElement);
  }

  saveToLocal(favCharacters, 'favCharactersLS');

  if (favCharacters.length > 0) {
    showFavorites();
    const isFav = true;
    renderCharacters(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters,
      isFav
    );
  } else {
    hideFavorites();
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

  if (!isCharacterInFavorites(favoriteId)) {
    favCharacters.push(favoriteCharacter);
    addFavoriteClass(favoriteElement);
  } else {
    const favIndex = getFavIndex(favoriteId);
    favCharacters.splice(favIndex, 1);
    removeFavoriteClass(favoriteElement);
  }

  saveToLocal(favCharacters, 'favCharactersLS');

  if (favCharacters.length > 0) {
    showFavorites();
    const isFav = true;
    renderCharacters(
      favCharacters,
      listFavoritesElement,
      classListItemFavCharacters,
      isFav
    );
  } else {
    hideFavorites();
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

function handleResetClick() {
  //limpiar array de favoritos
  favCharacters = [];
  //limpiar favs de local storage
  removeFromLocal('favCharactersLS');

  //volver a pintar fav
  const isFav = true;
  renderCharacters(
    favCharacters,
    listFavoritesElement,
    classListItemFavCharacters,
    isFav
  );
  //volver a pintar personajes
  renderCharacters(
    foundCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
  //esconder favoritos
  hideFavorites();
}

/*******************UTILITIES*****************/

//Función que quita el mensaje de "Added to favorites"
function hideFavMsg() {
  favMessage.classList.add('hidden');
}
//Función que muestra el mensaje de "Added to favorites"
function showFavMsg() {
  favMessage.classList.remove('hidden');
}

function getFavIndex(characterId) {
  const characterInFavouritesIndex = favCharacters.findIndex(
    (character) => character.char_id === characterId
  );
  return characterInFavouritesIndex;
}

function isCharacterInFavorites(characterId) {
  const characterInFavouritesIndex = getFavIndex(characterId);

  let isInFav = false;
  if (characterInFavouritesIndex !== -1) {
    isInFav = true;
  }
  return isInFav;
}

/***Esconder favoritos***/
function hideFavoritesSection() {
  sectionFavoritesElement.classList.add('hidden');
}

function hideButtonGoFav() {
  btnGoFav.classList.add('hidden');
}

function hideFavorites() {
  hideFavoritesSection();
  hideButtonGoFav();
}
/***END esconder favoritos***/

/***Mostrar favoritos***/
function showFavoritesSection() {
  sectionFavoritesElement.classList.remove('hidden');
}

function showButtonGoFav() {
  btnGoFav.classList.remove('hidden');
}

function showFavorites() {
  showFavoritesSection();
  showButtonGoFav();
}
/***END Mostrar favoritos***/

//Añadir clase favorite
function addFavoriteClass(element) {
  element.classList.add('favorite');
}

//Quitar clase favorite
function removeFavoriteClass(element) {
  element.classList.remove('favorite');
}

/***END UTILITIES***/
