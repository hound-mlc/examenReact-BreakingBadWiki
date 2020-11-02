import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useGetDeathByEpisode } from '../../hooks/useGetDeathsByEpisode';
import { withLoadedState } from '../../components/HoCLoadState';

export const Episode = ({ episodes, spoiler, chars }) => {
  let { id } = useParams();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/characters/${id}`);
  };

  const episodeSearched = episodes.data.find((episode) => {
    if (episode.episode_id == id) return episode;
  });

  const deaths = useGetDeathByEpisode(
    episodeSearched?.episode,
    episodeSearched?.season
  );

  const charsFiltered = chars.data.filter((char) => {
    if (
      episodeSearched.characters.includes(char.name) ||
      episodeSearched.characters.includes(char.nickname)
    )
      return char;
  });

  return (
    <div style={{ paddingTop: "2rem" }}>
      {episodes.loading && <Spinner animation="border" variant="success" />}
      {episodeSearched && (
        <div>
          <h1>Title: {episodeSearched.title}</h1>
          <h4>Episode number in season: {episodeSearched.episode}</h4>
          <h4>Air date: {episodeSearched.air_date}</h4>
        </div>
      )}
      {charsFiltered.length > 0 ? (
        <div>
          <h4>Characters appearing:</h4>
          {charsFiltered.map((char) => {
            return (
              <Button
                size="sm"
                block
                variant="link"
                key={char.char_id}
                onClick={() => handleClick(char.char_id)}
              >
                {char.name}
              </Button>
            );
          })}
        </div>
      ) : (
        <Spinner animation="border" variant="success" />
      )}
      <h4>Deaths: </h4>
      {!spoiler.activated ? (
        deaths.map((death) => <h5 key={death}>{death}</h5>)
      ) : (
        <h5>Spoiler</h5>
      )}
    </div>
  );
};

export const EpisodeRedux = withLoadedState(Episode);
