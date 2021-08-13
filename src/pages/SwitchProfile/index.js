import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profileImage.png';
import profileImg2 from '../../assets/images/profileVariant.png';

import Button from '../../components/Button';
import UserProfile from '../../components/UserProfile';
import {
  Container, Heading, Logo, Header, ProfilesContainer, ProfileOptions, MButton,
} from './styles';

export default function SwitchProfile() {
  return (
    <Container>

      <Header>
        <Logo src={logoImg} alt="HBO Max Logo" />
        <Heading>Who Is Watching?</Heading>
      </Header>

      <ProfilesContainer>
        <Link to="/home">
          <UserProfile profileImg={profileImg} userName="John Doe" />
        </Link>
        <UserProfile profileImg={profileImg2} userName="Jane Doe" />
      </ProfilesContainer>

      <ProfileOptions>
        <Button name="Adult" />
        <Button name="Kid" />
      </ProfileOptions>
      <MButton>Manage Profiles</MButton>

    </Container>
  );
}
