import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AlbumsContainer from './containers/AlbumsFormContainer';

ReactDOM.render(
  <AlbumsFormContainer />,
  document.getElementById('app')
)
