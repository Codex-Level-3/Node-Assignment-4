"use strict";

function mergeArrays(arr1, arr2) {
  const merge = arr1.concat(arr2);
  return merge;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.exports = { mergeArrays, removeDuplicates };
