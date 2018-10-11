import types from '../types';

const initialState = {
  open: false,
  lists: {}
};

const Drawer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_DRAWER:
      return { ...state, open: true };
    case types.CLOSE_DRAWER:
      return { ...state, open: false };
    case types.TOGGLE_DRAWER:
      return { ...state, open: !state.open };
    case types.TOGGLE_DRAWER_LIST:
      const listName = action.payload.listName;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listName]: !state.lists[listName]
        }
      };
    default:
      return state;
  }
};
export default Drawer;
