import {
  EPISODES_CALL,
  EPISODES_RESPONSE,
  EPISODES_ERROR,
} from '../actions/episodes';

const initialEpisodes = {
  loading: false,
  data: [],
  error: false,
};

export function episodesReducer(state = initialEpisodes, action) {
  switch (action.type) {
    case EPISODES_CALL:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case EPISODES_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case EPISODES_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
}
