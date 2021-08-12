/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line react/prefer-stateless-function

import settings from '../../../utils/SliderSettings';
import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class MediumCard extends Component {
  render() {
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <h1 style={{ color: 'white' }}>1</h1>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>2</h3>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>3</h3>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>4</h3>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>5</h3>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>6</h3>
          </div>
        </Slider>
      </Container>
    );
  }
}
