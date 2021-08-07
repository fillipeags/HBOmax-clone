import { RiMenu2Fill, RiSearchLine } from 'react-icons/ri';
import logoImg from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profileImage.png';
import { Container, ImgContainer, ProfileContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <button type="button">
          <RiMenu2Fill size={24} color="#F1F3F9" />
        </button>
        <button type="button">
          <RiSearchLine size={24} color="#F1F3F9" />
        </button>
      </div>

      <div>
        <button type="button">
          <img src={logoImg} alt="Logo" />
        </button>
      </div>

      <ProfileContainer>
        <button type="button">
          <ImgContainer>
            <img src={profileImg} alt="Profile" />
          </ImgContainer>
          <h3>Fillipe</h3>
        </button>
      </ProfileContainer>
    </Container>
  );
}
