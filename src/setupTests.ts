// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
	
declare global {
  namespace NodeJS {
    interface Global {
      setHookState: jest.Mocked<any>,
    }
  }
}

global.setHookState = (newState: {}) => jest.fn().mockImplementation((state: {}) => [
  newState,
  (newState: {}) => {}
]);