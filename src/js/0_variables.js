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
const listFavoritesElement = document.querySelector('.js_list_favorites');

/***END Elementos HTML***/

//Variables globales
let allCharacters = JSON.parse(localStorage.getItem('allCharactersLS'));
let foundCharacters = [];
let favCharacters = [];

//Código que se ejecuta al cargar la página
if (allCharacters) {
  renderCharacters(
    allCharacters,
    listCharactersElement,
    'main__characters__list__item'
  );
} else {
  fetchCharacters();
}
