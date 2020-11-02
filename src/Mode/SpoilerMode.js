import React from 'react';

export const spoilerContext = React.createContext({ activated: false });

export const SpoilerProvider = spoilerContext.Provider;
export const SpoilerConsumer = spoilerContext.Consumer;

// wrapper to avoid spoilers on the app

export const withSpoilers = (Component) => {
  return (props) => (
    <SpoilerConsumer>
      {(value) => <Component {...props} spoiler={value}></Component>}
    </SpoilerConsumer>
  );
};
