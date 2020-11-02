import {
  ALL_CHARS_CALL,
  ALL_CHARS_RESPONSE,
  ALL_CHARS_ERROR,
} from '../actions/allcharacters';

const initialChars = {
  loading: false,
  data: [],
  error: false,
};

export function allCharsReducer(state = initialChars, action) {
  switch (action.type) {
    case ALL_CHARS_CALL:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ALL_CHARS_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case ALL_CHARS_ERROR:
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
