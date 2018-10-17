import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import AlbumsFormContainer from '../containers/AlbumsFormContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumsIndex from './AlbumsIndex';
import AlbumTile from './AlbumTile';
import TextInputField from './TextInputField';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={AlbumsIndex} />
    </Router>
  )
}

export default App
