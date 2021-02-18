import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import toJson from 'enzyme-to-json';
import Enzyme, { shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Login from './page/Login/Login';
import Home from './page/Home/Home';

Enzyme.configure({ adapter: new Adapter() });

test('render Login correctly', () => {
    const wrapper = shallow(
      <BrowserRouter><Login/></BrowserRouter> 
  );
  
  expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('render Home correctly', () => {
    const wrapper = shallow(
      <BrowserRouter><Home/></BrowserRouter> 
  );
  
  expect(toJson(wrapper)).toMatchSnapshot();
  });