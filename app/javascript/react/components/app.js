import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import GenresIndexContainer from '../containers/GenresIndexContainer'
import GenreShowContainer from '../containers/GenreShowContainer'
import AlbumsIndex from '../components/AlbumsIndex'
import TextInputField from '../components/TextInputField'
import AlbumsContainer from '../containers/AlbumsContainer'
import AlbumsFormContainer from '../containers/AlbumsFormContainer'
import AlbumShowContainer from '../containers/AlbumShowContainer'
import ReviewsFormContainer from '../containers/ReviewsFormContainer'



export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={GenresIndexContainer} />
      <Route path='/genres' component={GenresIndexContainer} />
      <Route path='/genres/:id' component={GenreShowContainer} />
      <Route path='/genres/:genre_id/albums/:id' component={AlbumShowContainer} />
      <Route path='/albums/new' component={AlbumsFormContainer} />
      <Route path='/genres/:genre_id/albums/:album_id/reviews/new' component={ReviewsFormContainer} />


    </Router>
  );
}

export default App
