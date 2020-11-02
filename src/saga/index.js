import { spawn } from 'redux-saga/effects';
import characters from './characters';
import episodes from './episodes';

export default function* rootSaga(){
  yield spawn(characters);
  yield spawn(episodes);
}