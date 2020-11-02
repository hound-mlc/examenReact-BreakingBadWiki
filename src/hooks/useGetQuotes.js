import { useEffect, useState } from 'react';
import axios from 'axios';
const API_QUOTES = 'https://breakingbadapi.com/api/quote?author=';

export const useGetQuotes = (name) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Gustavo Fring is shorted on quotes, as Gus Fring
    const nameCorrect = name === 'Gustavo Fring' ? 'Gus Fring' : name;
    axios
      .get(`${API_QUOTES}${nameCorrect.replace(' ', '+')}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return data;
};
