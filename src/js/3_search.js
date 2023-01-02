'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function handleSearchClick(event) {
  event.preventDefault();
  const searchText = searchInput.value.toLowerCase();
  if (allCharacters) {
    foundCharacters = allCharacters.filter((character) =>
      character.status.toLowerCase().includes(searchText)
    );

    if (foundCharacters.length > 0) {
      searchResults.innerHTML = `Hay ${foundCharacters.length} resultado/s de su búsqueda.`;
      searchResults.classList.remove('hidden');
    } else {
      searchResults.innerHTML = `No se han encontrado personajes con ese criterio de búsqueda.`;
      searchResults.classList.remove('hidden');
    }

    renderCharacters(
      foundCharacters,
      listCharactersElement,
      classListItemAllCharacters
    );
  } else {
    fetchSearchCharacters(searchText);
  }
}

function handleInput(event) {
  event.preventDefault();
  const searchText = searchInput.value;
  if (!searchText) {
    renderCharacters(
      allCharacters,
      listCharactersElement,
      classListItemAllCharacters
    );
    searchResults.classList.add('hidden');
  }
}

function handleSearchResultsClick() {
  const array = [2, 5, 9];
  const searchResults = foundCharacters.length;
  for (const number of array) {
    if (number < searchResults) {
      console.log(
        `El número de resultados es ${searchResults} y es mayor que ${number}`
      );
    } else if (number > searchResults) {
      console.log(
        `El número de resultados es ${searchResults} y es menor que ${number}`
      );
    } else if (number === searchResults) {
      console.log(
        `El número de resultados es ${searchResults} y es igual que ${number}`
      );
    }
  }
}

searchBtn.addEventListener('click', handleSearchClick);

searchInput.addEventListener('input', handleInput);

searchResults.addEventListener('click', handleSearchResultsClick);
