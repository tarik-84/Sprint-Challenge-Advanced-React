import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  render(<App />);
});

test("it displays a header with text Women's World Cup", () => {
  const { getByText } = render(<App />);
  getByText(/^women's world cup$/i);
});

test('it displays a div that displas as a toggle button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('toggle-button')
});
