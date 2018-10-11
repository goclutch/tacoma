import types from '../types';

const initialState = {
  users: []
};
const formatUsers = users =>
  users.map((user, index) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    type: user.type,
    sent: user.sent,
    active: user.activated
  }));

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_RECEIVED:
      const formattedUsers = formatUsers(action.payload.users);
      return { ...state, users: formattedUsers };
    default:
      return state;
  }
};
export default users;
