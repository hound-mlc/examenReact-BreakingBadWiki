export const EPISODES_CALL = '@EPISODES/CALL';
export const EPISODES_RESPONSE = '@EPISODES/RESPONSE';
export const EPISODES_ERROR = '@EPISODES/ERROR';

export function getAllEpisodes(){
  return {
    type: EPISODES_CALL
  }
}