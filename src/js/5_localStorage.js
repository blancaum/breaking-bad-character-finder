'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function saveToLocal(data, keyName) {
  localStorage.setItem(keyName, JSON.stringify(data));
}
