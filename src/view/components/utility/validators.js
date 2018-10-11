const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const minLength6 = minLength(6);

export default {
  required,
  minLength6
};
