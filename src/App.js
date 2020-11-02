import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { SeasonsRedux } from './pages/Episodes/Seasons';
import { CharactersRedux } from './pages/Char/Characters';
import { HomeThemable } from './pages/Home/Home';
import { SpoilerProvider } from './Mode/SpoilerMode';
import { NotFound } from './pages/NotFound/NotFound';
import { Provider } from 'react-redux';
import { createStore } from './store/store';
import { CharRedux } from './pages/Char/Char';
import { AssassinsRedux } from './pages/Assassins/Assassins';
import { SeasonRedux } from './pages/Episodes/Season';
import { EpisodeRedux } from './pages/Episodes/Episode';
import { ResultsRedux } from './pages/SearchResult/SearchResult';

function App() {
  const [value, setValue] = useState({ activated: false });

  return (
    <>
      <Provider store={createStore()}>
        <SpoilerProvider value={value}>
          <Router>
            <Toolbar value={value} setValue={setValue}></Toolbar>
            <div className="App">
              <header className="App-header">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={HomeThemable}></Route>
                  <Route exact path="/seasons" component={SeasonsRedux}></Route>
                  <Route
                    exact
                    path="/seasons/:id"
                    component={SeasonRedux}
                  ></Route>
                  <Route
                    exact
                    path="/episode/:id"
                    component={EpisodeRedux}
                  ></Route>
                  <Route
                    exact
                    path="/characters"
                    component={CharactersRedux}
                  ></Route>
                  <Route
                    exact
                    path="/characters/:id"
                    component={CharRedux}
                  ></Route>
                  <Route
                    exact
                    path="/assassins"
                    component={AssassinsRedux}
                  ></Route>
                  <Route exact path="/search" component={ResultsRedux}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </header>
            </div>
          </Router>
        </SpoilerProvider>
      </Provider>
    </>
  );
}

export default App;
