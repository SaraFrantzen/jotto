import { actionTypes } from "../actions";
//reducer function - takes state and action and returns the state

export default (state=[], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}