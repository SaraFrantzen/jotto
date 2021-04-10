import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

//will take the initial state, create a store from the root reducer &  the initial state and that is what it will return
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
