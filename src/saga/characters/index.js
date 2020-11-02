import { spawn, takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  ALL_CHARS_CALL,
  ALL_CHARS_ERROR,
  ALL_CHARS_RESPONSE,
} from '../../actions/allcharacters';

export default function* charactersSaga() {
  yield spawn(watchGetAllCharsAsync);
}

function* watchGetAllCharsAsync() {
  yield takeEvery(ALL_CHARS_CALL, getUsers);
}

function* getUsers() {
  try {
    const chars = yield call(
      axios.get,
      'https://breakingbadapi.com/api/characters'
    );
    //Getting the death count by every char at the beginning, as a new field
    //of the array in state, so I don't have to load them all in the assassins tab
    const data = yield all(
      chars.data.map((char) => {
        return call(
          axios.get,
          `https://breakingbadapi.com/api/death-count?name=${char.name.replace(
            ' ',
            '+'
          )}`
        );
      })
    );

    const response = chars.data.map((char) => {
      const allKills = data.find((deathData) => {
        //The cousins Marco and Leonel were not together on the Death Count, just found Marco
        if (
          deathData.data[0].name === 'Marco ' &&
          char.name === 'Marco & Leonel Salamanca'
        ) {
          return true;
        } else return deathData.data[0].name === char.name;
      });
      return { ...char, deathCount: allKills.data[0].deathCount };
    });
    yield put({ type: ALL_CHARS_RESPONSE, payload: response });
  } catch (error) {
    console.log(error);
    yield put({
      type: ALL_CHARS_ERROR,
      payload: error,
    });
  }
}
