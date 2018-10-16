import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AlbumsFormContainer from './containers/AlbumsFormContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumsIndex from './components/AlbumsIndex';
import AlbumTile from './components/AlbumTile';
import TextInputField from './components/TextInputField';

export const App = (props) => {
  return (

    <Router history={browserHistory}>
      <Route path='/' component={AlbumsIndex} />
    </Router>
  );
  )
}

export default App
