import React from 'react';
import { RiPlayFill } from 'react-icons/ri';
import {
  Actions,
  BannerContainer, InfoBtn, PlayContainer, Title,
} from './styles';

import titleImg from '../../assets/images/mortalkombat-title.png';

export default function MainBanner() {
  return (
    <BannerContainer>

      <img src={titleImg} alt="Mortal Kombat Movie Title" />

      <Title>
        <h4>NEW MOVIE</h4>
        <p>Earth’s greatest champions join a deadly battle to save the universe.</p>
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
