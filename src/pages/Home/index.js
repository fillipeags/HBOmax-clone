import Nav from '../../components/Nav';
import MainBanner from '../../components/MainBanner';
import { Content } from './styles';
import Cards from '../../components/Cards';

export default function Home() {
  return (
    <>
      <Nav />
      <MainBanner />
      <Content>
        <Cards />
      </Content>
    </>
  );
}
