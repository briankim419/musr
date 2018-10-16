import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import GenresIndexContainer from '../containers/GenresIndexContainer'
import GenreShowContainer from '../containers/GenreShowContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={GenresIndexContainer} />
      <Route path='/genres/:id' component={GenreShowContainer} />
    </Router>
  );
}

export default App
