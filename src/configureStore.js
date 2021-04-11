import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewares = [ReduxThunk];

// apply those middlewares to the createStore,
//the 2nd one is the initialState which we are just going to give as an empty object (we apply the initial state in our individual reducers )
// applyMiddleware will receive as many arguments as they are in our array (right now only one - ReduxThunk)
export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
