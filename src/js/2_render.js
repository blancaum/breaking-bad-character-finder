'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/***Render personajes***/
function createBaseArticle(character, classListItem) {
  //nuevos elementos
  const newArticle = document.createElement('article');
  const newTitle = document.createElement('h3');
  const newImg = document.createElement('img');
  const newText = document.createElement('p');

  // Ahora creamos algo de contenido
  const newContentName = document.createTextNode(character.name);
  const newContentStatus = document.createTextNode(character.status);

  // Y se lo añadimos a nuestros elementos
  newTitle.appendChild(newContentName);
  newImg.src = character.img;
  newImg.alt = `Photo of ${character.name}`;
  newText.appendChild(newContentStatus);

  // añadimos las clases necesarias
  newTitle.classList.add('item__article__title');
  newImg.classList.add('item__article__img');
  newText.classList.add('item__article__text');
  newArticle.classList.add('item__article');
  newArticle.classList.add(classListItem);
  //añadimos la clase favorite si aplica
  const characterInFavouritesIndex = favCharacters.findIndex(
    (favCharacter) => favCharacter.char_id === character.char_id
  );

  if (characterInFavouritesIndex !== -1) {
    newArticle.classList.add('favorite');
  }

  //ponemos el id del article
  newArticle.setAttribute('id', character.char_id);

  //añadimos los elementos ya rellenos al article
  newArticle.appendChild(newTitle);
  newArticle.appendChild(newImg);
  newArticle.appendChild(newText);

  return newArticle;
}

function renderOneCharacter(character, classListItem, isFav) {
  //nuevos elementos
  let newArticle = {};
  const newLi = document.createElement('li');

  if (isFav) {
    newArticle = createFavArticle(character, classListItem);
  } else {
    newArticle = createBaseArticle(character, classListItem);
  }

  //añadimos clases al li
  newLi.classList.add('item');

  //añadimos el article al li
  newLi.appendChild(newArticle);

  return newLi;
}

function renderCharacters(
  characters,
  listElement,
  classListItem,
  isFav = false
) {
  listElement.innerHTML = '';
  for (const character of characters) {
    listElement.appendChild(
      renderOneCharacter(character, classListItem, isFav)
    );
  }
  addCharacterListeners();
  addFavoriteListeners();
}

/***END Render personajes***/

/***Render favoritos***/

function createFavArticle(character, classListItem) {
  //nuevos elementos
  const favArticle = createBaseArticle(character, classListItem);
  const newDiv = document.createElement('div');
  const newIcon = document.createElement('i');

  // añadimos las clases necesarias
  newDiv.classList.add('item__article__remove');
  newDiv.classList.add(classRemoveIcon);
  newIcon.classList.add('fa-solid');
  newIcon.classList.add('fa-circle-xmark');
  newIcon.classList.add('item__article__remove__icon');

  //añadimos el icon al div
  newDiv.appendChild(newIcon);

  //añadimos el div al article al inicio del article
  favArticle.insertBefore(newDiv, favArticle.firstChild);

  return favArticle;
}

/***END Render favoritos***/
