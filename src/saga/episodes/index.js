import { spawn, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  EPISODES_CALL,
  EPISODES_RESPONSE,
  EPISODES_ERROR,
} from '../../actions/episodes';

export default function* episodesSaga() {
  yield spawn(watchGetEpisodes);
}

function* watchGetEpisodes() {
  yield takeEvery(EPISODES_CALL, getEpisodes);
}

function* getEpisodes() {
  try {
    const response = yield call(
      axios.get,
      'https://breakingbadapi.com/api/episodes?series=Breaking+Bad'
    );
    yield put({ type: EPISODES_RESPONSE, payload: response.data });
  } catch (error) {
    yield put({
      type: EPISODES_ERROR,
      payload: error,
    });
  }
}
