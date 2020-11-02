import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { withLoadedState } from '../../components/HoCLoadState';
import { CharDetails } from './CharDetails';

export const Char = ({ chars, spoiler }) => {
  let { id } = useParams();

  const char = chars.data.find((char) => char.char_id == id);

  return (
    <div>
      {chars.loading && <Spinner animation="border" variant="success" />}
      {char ? (
        <CharDetails char={char} spoiler={spoiler}></CharDetails>
      ) : (
        !chars.loading && "Not Found"
      )}
    </div>
  );
};

export const CharRedux = withLoadedState(Char);
