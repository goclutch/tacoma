import types from '../types';

const open = (variant, message) => ({
  type: types.OPEN,
  payload: { variant, message }
});
const close = () => ({
  type: types.CLOSE,
  payload: {}
});
export default {
  open,
  close
};
