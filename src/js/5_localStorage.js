'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function getFromLocal(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

function saveToLocal(data, keyName) {
  localStorage.setItem(keyName, JSON.stringify(data));
}

function removeFromLocal(keyName) {
  localStorage.removeItem(keyName);
}
