import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { withLoadedState } from '../../components/HoCLoadState';

export const Characters = ({ chars }) => {
  //State helping to paginate data
  const [size, setSize] = useState(10);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/characters/${id}`);
  };

  const listItemStyle = {
    backgroundColor: '#0C5533',
    margin: '6px',
    color: 'white',
    width: '450px',
  };

  return (
    <div style={{ paddingTop: "2rem" }}>
      {chars.loading && <Spinner animation="border" variant="success" />}
      <ListGroup>
        {chars.data.length > 0 &&
          chars.data.slice(0, size).map((char) => (
            <ListGroup.Item
              onClick={() => handleClick(char.char_id)}
              style={listItemStyle}
              action
              key={char.char_id}
            >
              {char.name}
            </ListGroup.Item>
          ))}
      </ListGroup>
      {size < chars.data.length && (
        <Button
          variant="warning"
          style={{ margin: "20px" }}
          onClick={() => setSize(size + 10)}
        >
          Load more
        </Button>
      )}
      {chars.error && <h1>Can't load data, try later.</h1>}
    </div>
  );
};

Characters.propTypes = {
  chars: propTypes.object.isRequired,
};

export const CharactersRedux = withLoadedState(Characters);
