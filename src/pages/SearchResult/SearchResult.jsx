import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { withLoadedState } from '../../components/HoCLoadState';

export const Results = ({ chars, episodes }) => {
  const location = window.location.search
    .substr(3, window.location.search.length)
    .replace('%20', ' ');

  const history = useHistory();

  const clickChar = (id) => {
    history.push(`/characters/${id}`);
  };

  const clickEpisode = (id) => {
    history.push(`/episode/${id}`);
  };

  return (
    <div>
      <h2>Results for: {location}</h2>
      <h3>Characters: </h3>
      {chars.loading && <Spinner animation="border" variant="success" />}
      {chars.data.length > 0 &&
        chars.data.map((char) => {
          if (char.name.includes(location))
            return (
              <Button
                size="sm"
                onClick={() => clickChar(char.char_id)}
                block
                variant="link"
                key={char.char_id}
              >
                {char.name}
              </Button>
            );
        })}
      <h3>Episodes: </h3>
      {episodes.loading && <Spinner animation="border" variant="success" />}
      {episodes.data.length > 0 &&
        episodes.data.map((ep) => {
          if (ep.title.includes(location) || ep.characters.includes(location))
            return (
              <Button
                size="sm"
                block
                onClick={() => clickEpisode(ep.episode_id)}
                variant="link"
                key={ep.episode_id}
              >
                {ep.title}
              </Button>
            );
        })}
    </div>
  );
};

export const ResultsRedux = withLoadedState(Results);
