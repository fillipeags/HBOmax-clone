import React from 'react';
import { requests } from '../../services/requests';

import CardsList from './CardsList';

export default function Cards() {
  return (
    <>
      <CardsList
        title="Originals"
        fetchUrl={requests.fetchHBOOriginals}

      />

      <CardsList
        title="Coming Soon"
        fetchUrl={requests.fetchTrending}
        categoryDescription="Your favorite shows, beloved characters, and unforgettable stories."
        isBanner
      />

      <CardsList
        title="Just For You"
        fetchUrl={requests.fetchActionMovies}
      />

      <CardsList
        title="Everybody's Talking About Them"
        fetchUrl={requests.fetchComedyMovies}
      />

      <CardsList
        title="Must-Watch Movies"
        fetchUrl={requests.fetchDocumentaries}
        categoryDescription="If you haven't seen them, catch up. If you've seen them, it's time for a re-watch."
      />

      <CardsList
        title="Series We Recommend"
        fetchUrl={requests.fetchHorrorMovies}
        categoryDescription="Your favorite shows, beloved characters, andunforgettable stories."
      />

      <CardsList
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <CardsList
        title="Horror Movies"
        categoryDescription="The best Horror Movies to hunt you at night and not let you even blink"
        fetchUrl={requests.fetchHorrorMovies}
      />
    </>
  );
}
