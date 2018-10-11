// import languages from "../../../languages";

const initialState = {};

const unit = (state = initialState, action) => {
  switch (action.type) {
    // case types.SUBMIT_ACCOUNT_FORM:
    //   return languages[action.payload.formValues.language];
    default:
      return state;
  }
};
export default unit;
