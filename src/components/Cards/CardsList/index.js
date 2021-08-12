import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  CardsContainer, Container,
} from './styles';

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

export default function CardsList({
  // eslint-disable-next-line no-unused-vars
  title, fetchUrl, categoryDescription, isBoxSize, isMediumSize, isBiggerSize, isCoverSize,
}) {
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
        {shows.map((show) => show.backdrop_path !== null && (
          <img
            key={show.id}
            src={`${baseImgUrl}${show.backdrop_path}`}
            alt={show.title}
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
  isBoxSize: PropTypes.bool.isRequired,
  isMediumSize: PropTypes.bool.isRequired,
  isBiggerSize: PropTypes.bool.isRequired,
  isCoverSize: PropTypes.bool.isRequired,
};
