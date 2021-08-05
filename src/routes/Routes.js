import { Switch, Route } from 'react-router-dom';
import SwitchProfile from '../pages/SwitchProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SwitchProfile} />
    </Switch>
  );
}
