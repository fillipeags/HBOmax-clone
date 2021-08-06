import { Switch, Route } from 'react-router-dom';
import SplashLoading from '../components/MainLoading';
import Home from '../pages/Home';
import SwitchProfile from '../pages/SwitchProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/splash" component={SplashLoading} />
      <Route path="/" exact component={SwitchProfile} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
