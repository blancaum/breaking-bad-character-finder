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

/***END Elementos HTML***/

//Variables globales
let allCharacters = JSON.parse(localStorage.getItem('allCharactersLS'));
let foundCharacters = [];
let favCharacters = JSON.parse(localStorage.getItem('favCharactersLS'));

const classListItemAllCharacters = 'js_character_article';
const classListItemFavCharacters = 'js_favorite_article';

//Código que se ejecuta al cargar la página
if (favCharacters && favCharacters.length > 0) {
  favCharacters = JSON.parse(localStorage.getItem('favCharactersLS'));
  sectionFavoritesElement.classList.remove('hidden');
  renderCharacters(
    favCharacters,
    listFavoritesElement,
    classListItemFavCharacters
  );
} else {
  favCharacters = [];
  sectionFavoritesElement.classList.add('hidden');
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
