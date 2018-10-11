const stripeToken = state => state.account.billing.stripeToken;
const getUsersByType = (users, type) =>
  users.filter(user => user.type === type);
export default {
  stripeToken,
  getUsersByType
};
