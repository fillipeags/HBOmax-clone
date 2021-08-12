import React from 'react';
import requests from '../../services/requests';

import CardsList from './CardsList';

export default function Cards() {
  return (
    <>
      <CardsList
        title="Continue Watching"
        fetchUrl={requests.fetchRomanceMovies}
        isBoxSize
      />
      <CardsList
        title="Just For You"
        fetchUrl={requests.fetchActionMovies}
        isMediumSize
      />

      <CardsList
        title="Everybody's Talking About Them"
        fetchUrl={requests.fetchComedyMovies}
        isBiggerSize
      />

      <CardsList
        title="Must-Watch Movies"
        fetchUrl={requests.fetchDocumentaries}
        categoryDescription="If you haven't seen them, catch up. If you've seen them, it's time for a re-watch."
        isCoverSize
      />

      <CardsList
        title="Series We Recommend"
        fetchUrl={requests.fetchHorrorMovies}
        categoryDescription="Your favorite shows, beloved characters, andunforgettable stories."
        isCoverSize
      />

      <CardsList
        title="Coming Soon"
        fetchUrl={requests.fetchTrending}
        categoryDescription="Your favorite shows, beloved characters, andunforgettable stories."
        isMediumSize
      />

      <CardsList
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isMediumSize
      />
    </>
  );
}
