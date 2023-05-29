import {useState} from 'react';
import {gql, useQuery} from '@apollo/client';

export const useGetAllCharacter = () => {
  const [text, setText] = useState('');
  const [species, setSpecies] = useState('');

  const GET_DOGS = gql`
    query Characters($text: String!, $species: String!) {
      characters(page: 0, filter: {name: $text, species: $species}) {
        info {
          count
        }
        results {
          id
          name
          species
          image
          status
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `;
  const query = useQuery(GET_DOGS, {variables: {text, species}});

  return {query, setText, setSpecies};
};
