// import { Container } from './styles';
import MainBanner from '../../components/MainBanner';
import Nav from '../../components/Nav';
import { Content } from './styles';

export default function Home() {
  return (
    <>
      <Nav />
      <MainBanner />
      <Content />
    </>
  );
}
