import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const mockSetCurrentGuess = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}))
const setup = ( secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
    checkProps(Input, {secretWord: 'party'})
})

describe('state controlled input field', () => {
    test('state updates with value of input box upon change', () => {
       const wrapper = setup()
       const inputBox = findByTestAttr(wrapper, 'input-box')
       //simulate input into the input-box => We create a mock event and apply that as the change event to the input-box
       const mockEvent = { target: { value: 'train'}}
       inputBox.simulate('change', mockEvent)
       expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

    })
})

describe('', () => {
    
})
