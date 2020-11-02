import React, { useState } from 'react';
import { useGetRandomQuote } from '../../hooks/useGetRandomQuoteId';
import { useGetQuotes } from '../../hooks/useGetQuotes';
import './CharDetails.css';
import { CharPortrait } from './CharPortrait';
import { Button } from 'react-bootstrap';

export const CharDetails = ({ char, spoiler }) => {
  const [showQuotes, setShowQuotes] = useState(false);

  const { helperFunction, data } = useGetRandomQuote(char.name);
  const allQuotes = useGetQuotes(char.name);

  return (
    <div className="divDetails">
      <CharPortrait image={char.img}>{char.name}</CharPortrait>
      {data && (
        <div>
          <p key={data.quote_id}> Random quote: {data.quote}</p>
          <Button variant="warning" onClick={() => helperFunction(char.name)}>Refresh random quote</Button>
          &nbsp;
          <Button variant="warning" onClick={() => setShowQuotes(!showQuotes)}>
            toggle quotes
          </Button>
        </div>
      )}
      {showQuotes && (
          allQuotes.map((quote) => (
            <p key={quote.quote_id}>{quote.quote}</p>
          ))
      )}
      <h3 style={{ marginTop: "50px" }}>Information</h3>
      <p>
        Death Count: {spoiler.activated ? "SPOILER" : char.deathCount}
      </p>
      <p>Birthday: {char.birthday}</p>
      <p>Status: {spoiler.activated ? "SPOILER" : char.status}</p>
      <p>Nickname: {char.nickname}</p>
      <p>Portrayed by: {char.portrayed}</p>
      <div style={{ maxWidth: "700px" }}>
        Occupations:
        {char.occupation.map((job) => job)}
      </div>
    </div>
  );
};
