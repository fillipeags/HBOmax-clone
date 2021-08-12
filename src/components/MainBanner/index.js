import React, { useState, useEffect } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import {
  Actions,
  BannerContainer, InfoBtn, PlayContainer, Title,
} from './styles';

// import titleImg from '../../assets/images/mortalkombat-title.png';
import api from '../../services/api';
import requests from '../../services/requests';

export default function MainBanner() {
  const [featuredShow, setFeaturedShow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchTrending);
      setFeaturedShow(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)],
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <BannerContainer style={{
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) ,url("https://image.tmdb.org/t/p/original${featuredShow?.backdrop_path}")`,
      backdropPosition: 'center center',
    }}
    >

      <Title>
        <h1>{featuredShow?.title || featuredShow?.name || featuredShow?.original_name}</h1>
        <p>WATCH NOW</p>
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
