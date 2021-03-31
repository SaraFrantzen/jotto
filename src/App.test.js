import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => {
  return shallow(<App />)
}

test('renders learn react link', () => {
  const wrapper = setup()
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app.length).toBe(1)
});
