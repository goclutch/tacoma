import types from '../types';

const openDrawer = () => ({
  type: types.OPEN_DRAWER,
  payload: {}
});
const closeDrawer = () => ({
  type: types.CLOSE_DRAWER
});
const toggleDrawer = () => ({
  type: types.TOGGLE_DRAWER
});

const toggleDrawerList = listName => ({
  type: types.TOGGLE_DRAWER_LIST,
  payload: { listName }
});

export default {
  openDrawer,
  closeDrawer,
  toggleDrawer,
  toggleDrawerList
};
