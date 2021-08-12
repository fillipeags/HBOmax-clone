import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  CardsContainer, Container,
} from './styles';

import { baseImgUrl } from '../../../services/requests';

export default function CardsList({
  title, fetchUrl, categoryDescription, isBanner,
}) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await api.get(fetchUrl).then((response) => setShows(
        response.data.results,
      ));
    };
    fetch();
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <p>{categoryDescription}</p>

      <CardsContainer isBanner={isBanner}>
        {shows.map((show) => show.backdrop_path !== null && (
          <img
            key={show.id}
            src={`${baseImgUrl}${isBanner ? show.backdrop_path : show.poster_path}`}
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
  categoryDescription: PropTypes.string,
  isBanner: PropTypes.bool,
};

CardsList.defaultProps = {
  categoryDescription: '',
  isBanner: false,
};
