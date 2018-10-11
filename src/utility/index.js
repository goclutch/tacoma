const downcase = string => {
  if (!string || typeof string !== 'string') return null;
  return string.toLowerCase();
};
const underscore = string => {
  if (!string || typeof string !== 'string') return null;
  return string.replace(/\s+/g, '_');
};
const downUndercase = string => downcase(underscore(string));
const createUUID = a => {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g);
};

export default {
  downcase,
  underscore,
  downUndercase,
  createUUID
};
