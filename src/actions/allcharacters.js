export const ALL_CHARS_CALL = '@CHARS/ALL_CHARS_CALL';
export const ALL_CHARS_RESPONSE = '@CHARS/ALL_CHARS_RESPONSE';
export const ALL_CHARS_ERROR = '@CHARS/ALL_CHARS_ERROR';

export function getAllChars(){
  return {
    type: ALL_CHARS_CALL
  }
}