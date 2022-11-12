'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function renderOneCharacter(character, classListItem, index) {
  const html = `<li class="${classListItem}">
  <article class="item__article">
    <img class="item__article__img" src="${character.img}" alt="${character.name}">
    <h3 class="item__article__title">${character.name}</h3>
    <p class="item__article__text">${character.status}</p>
  </article>
</li>`;
  return html;
}

function renderCharacters(characters, listElement, classListItem) {
  listElement.innerHTML = '';
  for (const character of characters) {
    listElement.innerHTML += renderOneCharacter(
      character,
      classListItem,
      characters.indexOf(character)
    );
  }
}
