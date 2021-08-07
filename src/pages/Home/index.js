import { Container } from './styles';
import MainBanner from '../../components/MainBanner';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <MainBanner />
    </Container>
  );
}
