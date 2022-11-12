'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function renderOneCharacter(character, classListItem, index) {
  const html = `<li class="${classListItem}--${index}">
  <article>
    <img src="${character.img}" alt="${character.name}">
    <h3>${character.name}</h3>
    <p>${character.status}</p>
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
