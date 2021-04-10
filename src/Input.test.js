import React from "react";
import { mount } from "enzyme";
import { checkProps, findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";
import { Provider } from "react-redux";

const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const setup = (initialState = {}, secretWord = "party") => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>
  );
};

describe("success is true", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: true });
  });
  test("Input renders without error", () => {
    const wrapper = setup({ success: true });
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
  });

  test("input box does not show", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);
  });

  test("input box does not show", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });
});

describe("success is false", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: false });
  });
  test("Input renders without error", () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
  });

  test("input box does show", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(true);
  });

  test("input box does show", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(true);
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const wrapper = setup({ success: false });
    const inputBox = findByTestAttr(wrapper, "input-box");
    //simulate input into the input-box => We create a mock event and apply that as the change event to the input-box
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const wrapper = setup({ success: false });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    //click with event - preventDefault, which is here a obj with 1 property (preventDefault), which is a function doing nothing
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
