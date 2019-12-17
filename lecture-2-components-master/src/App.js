import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import DoggoPage from './containers/DoggoPage/DoggoPage';
import { Header } from './components/Header';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Header
        className="App-header"
        showLogo
        greeting="Doggo app"
      />

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="/doggos">
          <DummyComponent/>
        </Route>

        <Route path="/doggo/:id">
          <DoggoPage/>
        </Route>

        <Route
          path="/not-found"
          render={routeProps => (
            <NotFoundPage {...routeProps}/>
          )}
        />

        <Redirect
          from="*"
          to={{
            pathname: '/not-found'
          }}
        />
      </Switch>
    </Router>
  );
}

function DummyComponent() {
  return <h2>Dummy Component here!</h2>;
}
