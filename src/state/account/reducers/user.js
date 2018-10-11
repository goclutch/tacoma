import types from '../types';

const initialState = {
  profileData: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_DATA_RECEIVED:
      const profileData = action.payload.profileData;
      return { ...state, profileData };
    case types.CLEAR_USER_DATA:
      return { ...state, profileData: null };
    default:
      return state;
  }
};
export default user;
