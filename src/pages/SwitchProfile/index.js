import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profileImage.png';
import profileImg2 from '../../assets/images/profileVariant.png';
import Button from '../../components/Button';
import UserProfile from '../../components/UserProfile';
import {
  Container, Heading, Logo, Header, ProfilesContainer, CreateProfileContainer, MButton,
} from './styles';

export default function SwitchProfile() {
  return (
    <Container>

      <Header>
        <Logo src={logoImg} alt="HBO Max Logo" />
        <Heading>Who Is Watching?</Heading>
      </Header>

      <ProfilesContainer>
        <UserProfile profileImg={profileImg} userName="Fillipe" />
        <UserProfile profileImg={profileImg2} userName="João" />
      </ProfilesContainer>

      <CreateProfileContainer>
        <Button name="Adult" />
        <Button name="Kid" />
      </CreateProfileContainer>
      <MButton>Manage Profiles</MButton>

    </Container>
  );
}
