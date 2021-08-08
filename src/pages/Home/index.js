// import { Container } from './styles';
import MainBanner from '../../components/MainBanner';
import Header from '../../components/Header';
import { Content } from './styles';
import MediumCard from '../../components/Cards/MediumCard';

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Content>
        <MediumCard />
      </Content>
    </>
  );
}
