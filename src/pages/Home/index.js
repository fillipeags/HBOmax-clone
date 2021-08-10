// import { Container } from './styles';
import MainBanner from '../../components/MainBanner';
import Header from '../../components/Header';
import { Content } from './styles';
import ContinueWatching from '../../components/Cards/ContinueWatching';

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Content>
        <ContinueWatching />
      </Content>
    </>
  );
}
