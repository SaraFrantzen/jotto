import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from "./actions";
import { Provider } from "react-redux";

jest.mock("./actions");

const setup = () => {
  const store = storeFactory();
  return mount(<Provider store={store}><App /> </Provider>);
};

test("renders learn react link", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    //reset mock call
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    //update component to trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
