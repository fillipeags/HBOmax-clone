import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { PulseLoader } from 'react-spinners';
import logoImg from '../../assets/images/logo.svg';

import { Container, LoaderContainer } from './styles';

export default function SplashLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  if (!isLoading) {
    return (
      <Redirect to="/profiles" />
    );
  }

  return (
    <Container>
      <img src={logoImg} alt="" />
      <LoaderContainer>
        <PulseLoader size={18} color="white" speedMultiplier={0.5} margin={8} />
      </LoaderContainer>
    </Container>
  );
}
