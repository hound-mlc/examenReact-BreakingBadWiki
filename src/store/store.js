import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { allCharsReducer } from '../reducers/allchars.reducer';
import {
  createStore as createStoreRedux,
  applyMiddleware,
  combineReducers,
} from 'redux';
import sagas from '../saga';
import { episodesReducer } from '../reducers/episodes.reducer';

export function createStore() {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStoreRedux(
    combineReducers({ characters: allCharsReducer, episodes: episodesReducer }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
}
