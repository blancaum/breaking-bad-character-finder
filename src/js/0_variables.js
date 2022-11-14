'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/***Elementos HTML***/

//Search form
const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_btn');

//Lista de personajes
const listCharactersElement = document.querySelector('.js_list_characters');
//Lista de favoritos
const sectionFavoritesElement = document.querySelector('.js_section_favorites');
const listFavoritesElement = document.querySelector('.js_list_favorites');

//Mensaje de añadir a favoritos
const favMessage = document.querySelector('.js_fav_message');

//Botón de ir a favoritos
const btnGoFav = document.querySelector('.js_button_gofav');

/***END Elementos HTML***/

//Variables globales
let allCharacters = JSON.parse(localStorage.getItem('allCharactersLS'));
let foundCharacters = [];
let favCharacters = JSON.parse(localStorage.getItem('favCharactersLS'));

const classListItemAllCharacters = 'js_character_article';
const classListItemFavCharacters = 'js_favorite_article';
const classRemoveIcon = 'js_remove_favorite';

//Código que se ejecuta al cargar la página
if (favCharacters && favCharacters.length > 0) {
  sectionFavoritesElement.classList.remove('hidden');
  btnGoFav.classList.remove('hidden');
  renderFavorites(
    favCharacters,
    listFavoritesElement,
    classListItemFavCharacters
  );
} else {
  favCharacters = [];
  sectionFavoritesElement.classList.add('hidden');
  btnGoFav.classList.add('hidden');
}

if (allCharacters) {
  renderCharacters(
    allCharacters,
    listCharactersElement,
    classListItemAllCharacters
  );
} else {
  fetchCharacters();
}
