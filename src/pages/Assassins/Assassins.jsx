import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllChars } from '../../actions/allcharacters';
import { withSpoilers } from '../../Mode/SpoilerMode';
import './Assassins.css';

const desc = (a, b) => {
  if (a.deathCount < b.deathCount) {
    return 1;
  }
  if (a.deathCount > b.deathCount) {
    return -1;
  }
  return 0;
};

const asc = (a, b) => {
  if (a.deathCount < b.deathCount) {
    return -1;
  }
  if (a.deathCount > b.deathCount) {
    return 1;
  }
  return 0;
};

export const Assassins = ({ chars, loading, getChars, spoiler }) => {
  const [sort, setSort] = useState(false);

  useEffect(() => {
    chars.length == 0 && getChars();
  }, [spoiler, sort]);


  const handleClick = () => {
    setSort(!sort);
    if (sort) {
      chars.sort(desc);
    } else {
      chars.sort(asc);
    }
  };

  return (
    <div className="mainDiv">
      {loading && <Spinner animation="border" variant="success" />}
      {chars.length > 0 && (
        <div>
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  Death Count{" "}
                  <Button variant="light" onClick={handleClick}>
                    ⇵
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {chars.map((char) => {
                if (char.deathCount > 0) {
                  return (
                    <tr key={char.char_id}>
                      <td>{char.name}</td>
                      <td>
                        {!spoiler.activated ? char.deathCount : "SPOILER"}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const list = [...state.characters.data];
  list.sort(desc);
  //The list I like to props from state is a copy of the original one but already sorted
  //by deathCount, so I can dinamically change the sort order without affecting main list
  return {
    chars: list,
    loading: state.characters.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChars: () => dispatch(getAllChars())
  };
}

export const AssassinsRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withSpoilers(Assassins));
