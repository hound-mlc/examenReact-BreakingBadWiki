import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { withLoadedState } from '../../components/HoCLoadState';

export const Season = ({ episodes }) => {
  let { id } = useParams();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/episode/${id}`);
  };

  const filterEpisodes = episodes.data.filter((episode) => {
    if (episode.season == id) return episode;
  });

  const listItemStyle = {
    backgroundColor: '#0C5533',
    margin: '6px',
    color: 'white',
    width: '450px',
  };

  return (
    <div>
      {episodes.loading && <Spinner animation="border" variant="success" />}
      {episodes.data.length > 0 && <h2>Season {id}</h2>}
      <ListGroup>
        {filterEpisodes &&
          filterEpisodes.map((ep) => (
            <ListGroup.Item
              style={listItemStyle}
              onClick={() => handleClick(ep.episode_id)}
              action
              key={ep.episode_id}
            >
              Episode {ep.episode}: {ep.title}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};

export const SeasonRedux = withLoadedState(Season);
