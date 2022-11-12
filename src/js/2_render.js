'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function renderOneCharacter(character, classListItem) {
  let html = '';
  const characterInFavouritesIndex = favCharacters.findIndex(
    (favCharacter) => favCharacter.char_id === character.char_id
  );

  if (characterInFavouritesIndex === -1) {
    html = `<li class="item">
  <article id="${character.char_id}" class="item__article ${classListItem}">
    <img class="item__article__img" src="${character.img}" alt="${character.name}">
    <h3 class="item__article__title">${character.name}</h3>
    <p class="item__article__text">${character.status}</p>
  </article>
</li>`;
  } else {
    html = `<li class="item">
  <article id="${character.char_id}" class="item__article ${classListItem} favorite">
    <img class="item__article__img" src="${character.img}" alt="${character.name}">
    <h3 class="item__article__title">${character.name}</h3>
    <p class="item__article__text">${character.status}</p>
  </article>
</li>`;
  }
  return html;
}

function renderCharacters(characters, listElement, classListItem) {
  listElement.innerHTML = '';
  for (const character of characters) {
    listElement.innerHTML += renderOneCharacter(character, classListItem);
  }
  addCharacterListeners();
}
