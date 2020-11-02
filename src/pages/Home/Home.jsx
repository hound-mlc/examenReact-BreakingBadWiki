import React from 'react';
import { Card } from 'react-bootstrap';
import { withSpoilers } from '../../Mode/SpoilerMode';

export const Home = () => {
  const cardStyles = {
    width: '60rem',
    backgroundColor: '#0C5533',
    fontFamily: 'serif',
  };
  const cardTitleStyles = { fontSize: '30px', fontWeight: 'bold' };

  return (
    <div style={{ paddingTop: "40px" }}>
      <Card style={cardStyles}>
        <Card.Img variant="top" src="./assets/cardHeader.jpg" />
        <Card.Body>
          <Card.Title style={cardTitleStyles}>
            Welcome to Breaking Bad Wiki
          </Card.Title>
          <Card.Text>
            If you want to avoid spoilers, you can use our spoiler free mode! It
            will hide all information about characters deaths.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export const HomeThemable = withSpoilers(Home);
