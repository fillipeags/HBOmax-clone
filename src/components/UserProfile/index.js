import PropTypes from 'prop-types';
import {
  Container, Heading3, ImageContainer, ProfilePic,
} from './styles';

export default function UserProfile({ profileImg, userName }) {
  return (
    <Container>
      <ImageContainer>
        <ProfilePic src={profileImg} alt={`Profile ${userName}`} />
      </ImageContainer>
      <Heading3>{userName}</Heading3>
    </Container>
  );
}

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  profileImg: PropTypes.node.isRequired,
};
