import logoImg from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profileImage.png';
import {
  Container, Heading, Heading3, Logo, ImageContainer, ProfilePic, ManageProfileContainer, Button,
} from './styles';

export default function SwitchProfile() {
  return (
    <Container>
      <Logo src={logoImg} alt="HBO Max Logo" />
      <Heading>Who is Watching ?</Heading>

      <ImageContainer>
        <ProfilePic src={profileImg} alt="Profile Image" />
      </ImageContainer>
      <Heading3>Fillipe</Heading3>

      <ManageProfileContainer>
        <Button type="button">
          <span>+</span>
          ADULT
        </Button>
        <Button type="button">
          <span>+</span>
          KID
        </Button>
        <Heading3>MANAGE PROFILES</Heading3>

      </ManageProfileContainer>

    </Container>
  );
}
