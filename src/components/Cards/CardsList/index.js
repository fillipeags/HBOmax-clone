/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  CardsContainer, Container, SkeletonContainer,
} from './styles';

import { baseImgUrl } from '../../../services/requests';

export default function CardsList({
  title, fetchUrl, categoryDescription, isBanner,
}) {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      await api.get(fetchUrl).then((response) => {
        setShows(response.data.results);
        setIsLoading(false);
      });
    };
    fetch();
  }, []);

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Container>
        {isLoading && (
          <SkeletonContainer>
            <Skeleton width={200} height={40} />
          </SkeletonContainer>
        )}
        {!isLoading && <h2>{title}</h2>}

        {isLoading && (
          <SkeletonContainer>
            <Skeleton width={400} height={40} />
          </SkeletonContainer>
        )}
        {!isLoading && <p>{categoryDescription}</p>}

        <CardsContainer isBanner={isBanner}>

          {!isLoading && shows.map((show) => show.backdrop_path !== null && (
            <img
              key={show.id}
              src={`${baseImgUrl}${isBanner ? show.backdrop_path : show.poster_path}`}
              alt={show.title}
            />

          ))}

          {isLoading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((key) => (
            <SkeletonContainer key={key}>
              <Skeleton width={200} height={300} />
            </SkeletonContainer>
          ))}

        </CardsContainer>

      </Container>
    </SkeletonTheme>
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
