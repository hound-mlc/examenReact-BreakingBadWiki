import React, { useEffect, useState } from 'react';
import { useGetRandomQuote } from '../../hooks/useGetRandomQuoteId';

export const Quote = ({ name }) => {
  const [quote, setQuote] = useState(null);
  const quotes = useGetRandomQuote(name);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quote]);
  
  return quote ? (
    <div>
      {quotes.length > 0 && (
        <h2 key={quote.quote_id}> Random quote: {quote.quote}</h2>
      )}
      <button
        onClick={() =>
          setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
      >
        refresh
      </button>
    </div>
  ) : (
    " "
  );
};
