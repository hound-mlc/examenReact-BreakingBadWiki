import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllChars } from '../actions/allcharacters';
import { getAllEpisodes } from '../actions/episodes';
import { withSpoilers } from '../Mode/SpoilerMode';

/*
  This component is used to wrap the pages and connect to redux's store,
  this triggers the action to load the state in loading if u access for 
  any route in init, testing if the state is not already loaded
*/
export const withLoadedState = (Component) => {
  const WithLoadedStateComponent = ({
    episodes,
    getEpisodes,
    chars,
    getChars,
    spoiler
  }) => {

    useEffect(() => {
      chars.data.length == 0 && getChars();
      episodes.data.length == 0 && getEpisodes();
    }, [spoiler]);

    return (
      <Component
        episodes={episodes}
        chars={chars}
        spoiler={spoiler}
      ></Component>
    );
  };

  function mapStateToProps(state) {
    return {
      episodes: state.episodes,
      chars: state.characters
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      getEpisodes: () => dispatch(getAllEpisodes()),
      getChars: () => dispatch(getAllChars())
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withSpoilers(WithLoadedStateComponent));
};
