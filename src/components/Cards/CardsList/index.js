import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  CardsContainer, Container,
} from './styles';

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

export default function CardsList({ title, fetchUrl, categoryDescription }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setShows(request.data.results);
      // eslint-disable-next-line no-console
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Container>
      <h2>{title}</h2>
      <p>{categoryDescription}</p>

      <CardsContainer>
        {shows.map((show) => (
          <img
            key={show.id}
            src={`${baseImgUrl}${show.backdrop_path}`}
            alt={show.name}
          />
        ))}
      </CardsContainer>

    </Container>
  );
}

CardsList.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string.isRequired,
};
