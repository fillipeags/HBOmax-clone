import React, { useState, useEffect } from 'react';

import { RiPlayFill } from 'react-icons/ri';

import {
  Actions, BannerContainer, InfoBtn, PlayContainer, Title,
} from './styles';

import truncate from '../../utils/truncate';

import api from '../../services/api';
import { requests } from '../../services/requests';

export default function MainBanner() {
  const [featuredShow, setFeaturedShow] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await api.get(requests.fetchTrending).then((response) => setFeaturedShow(
        response.data.results[Math.floor(Math.random() * response.data.results.length - 1)],
      ));
    };
    fetch();
  }, []);

  return (
    <BannerContainer style={{
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) ,url("https://image.tmdb.org/t/p/original/${featuredShow?.backdrop_path}")`,
      backdropPosition: 'center center',
    }}
    >

      <Title>
        <h1>{featuredShow?.title || featuredShow?.name || featuredShow?.original_name}</h1>
        <span>WATCH NOW</span>
        <p>{truncate(featuredShow?.overview, 200)}</p>
      </Title>

      <Actions>
        <PlayContainer>
          <RiPlayFill size={32} color="white" />
        </PlayContainer>

        <InfoBtn>More Info</InfoBtn>
      </Actions>
    </BannerContainer>
  );
}
