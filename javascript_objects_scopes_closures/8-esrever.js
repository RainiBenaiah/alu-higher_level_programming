#!/usr/bin/node
// Reverse a lis
exports.esrever = function (list) {
  const newList = [];
  for (let index = list.length - 1; index >= 0; index--) {
    newList.push(list[index]);
  }
  return newList;
};
