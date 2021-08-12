import React from 'react';
import requests from '../../services/requests';

import CardsList from './CardsList';

export default function Cards() {
  return (
    <CardsList
      title="Must-Watch Movies"
      categoryDescription="If you haven't seen them, catch up. If you've seen them, it's time for a re-watch."
      fetchUrl={requests.fetchTrending}
    />
  );
}
