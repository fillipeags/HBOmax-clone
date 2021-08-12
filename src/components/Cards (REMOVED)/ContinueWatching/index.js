import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { CardContainer, CardContent, Container } from './styles';
import testimage from '../../../assets/images/continueWatching.jpeg';

export default function ContinueWatching() {
  return (
    <Container>
      <h2>
        Continue Watching
        <IoIosArrowForward size={24} color="gray" />
      </h2>

      <CardContainer>
        <CardContent>
          <img src={testimage} alt="Test" />
          <p>
            Rick and Morty
            <span>S5 E2</span>
          </p>
        </CardContent>
        <CardContent>
          <img src={testimage} alt="Test" />
          <p>
            Rick and Morty
            <span>S5 E2</span>
          </p>
        </CardContent>
        <CardContent>
          <img src={testimage} alt="Test" />
          <p>
            Rick and Morty
            <span>S5 E2</span>
          </p>
        </CardContent>
        <CardContent>
          <img src={testimage} alt="Test" />
          <p>
            Rick and Morty
            <span>S5 E2</span>
          </p>
        </CardContent>
        <CardContent>
          <img src={testimage} alt="Test" />
          <p>
            Rick and Morty
            <span>S5 E2</span>
          </p>
        </CardContent>
      </CardContainer>

    </Container>

  );
}
