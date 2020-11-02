import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { withLoadedState } from '../../components/HoCLoadState';

export const Seasons = ({episodes, getEpisodes, spoiler}) => {

  const history = useHistory();

  const getSeasons = () => {
    const seasons = episodes.data.map(episode => episode.season.trim());
    let s = new Set(seasons);
    let it = s.values();
    return Array.from(it);
  }

  const handleClick = (season) => {
    history.push(`/seasons/${season}`);
  }

  const seasons = episodes.data.length > 0 && getSeasons();

  const listItemStyle = {
    backgroundColor: '#0C5533',
    margin: '6px',
    color: 'white',
    width: '450px'
  }

  return (
    <div style={{paddingTop: "25px"}}>
      {episodes.loading && <Spinner animation="border" variant="success" />}
      <ListGroup>
        {seasons && seasons.map(season => 
            <ListGroup.Item style={listItemStyle} onClick={() => handleClick(season)} action key={season}>Season {season}</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};


export const SeasonsRedux = withLoadedState(Seasons);