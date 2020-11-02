import { useEffect, useState } from 'react';
import axios from 'axios';
const API_QUOTES = 'https://breakingbadapi.com/api/quote/random?author=';

export const useGetRandomQuote = (name) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    helperFunction(name);
  }, []);

  const helperFunction = (name) => {
    // Gustavo Fring is shorted on quotes, as Gus Fring
    const nameCorrect = name === 'Gustavo Fring' ? 'Gus Fring' : name;
    axios
      .get(`${API_QUOTES}${nameCorrect.replace(' ', '+')}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Decided to return the helper function to refresh the random quote picked
  return {
    helperFunction,
    data
  };
};
