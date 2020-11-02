import { useEffect, useState } from 'react';
import axios from 'axios';
const API_DEATHS = 'https://breakingbadapi.com/api/deaths';

export const useGetDeathByEpisode = (episode, season) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_DEATHS)
      .then((response) => {
        const episodeDeaths = response.data.map((death) => {
          if (death.episode === +episode && death.season === +season) {
            return death.death;
          }
        });
        setData(episodeDeaths);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return data;
};
