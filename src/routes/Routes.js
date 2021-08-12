import { Switch, Route } from 'react-router-dom';
import SplashLoading from '../components/SplashLoading';
import Home from '../pages/Home';
import SwitchProfile from '../pages/SwitchProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SplashLoading} />
      <Route path="/profiles" component={SwitchProfile} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
