import _ from 'lodash';
const removeArrayElement = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length)
];
const appendArrayElement = (array, element) => [...array, element];
const prependArrayElement = (array, element) => [element, ...array];
const replaceArrayElement = (array, index, element) => [
  ...array.slice(0, index),
  element,
  ...array.slice(index + 1, array.length)
];
const updateObject = (object, key, value) => ({ ...object, [key]: value });
const mergeObjects = objects => {
  let new_object = {};
  objects.map((object, index) => (new_object = { ...new_object, ...object }));
  return new_object;
};
const removeAtKey = (object, key) => _.omit(object, [key]);
const removeAtKeys = (object, keys) => _.omit(object, keys);
const checkKeyValue = (object, key, value) => object[key] === value;
const removeForKeyAtValue = (object, key, value) => {
  return _.omitBy(object, checkKeyValue.bind(null, key, value));
};
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export default {
  removeArrayElement,
  appendArrayElement,
  prependArrayElement,
  replaceArrayElement,
  updateObject,
  mergeObjects,
  removeAtKey,
  removeAtKeys,
  checkKeyValue,
  removeForKeyAtValue,
  pipe
};
