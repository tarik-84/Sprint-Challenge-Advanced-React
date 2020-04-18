import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App title and header is appearing ', () => {
  // Arrange
  const {getByText} = render(<App/>)
  // Act
// nothing to do here
  //Assert
  const title = getByText(/Women's World Cup /i);
  expect(title).toBeVisible();

  const header = getByText(/Ranked according to popularity/i);
  expect(header).toBeVisible();
});
