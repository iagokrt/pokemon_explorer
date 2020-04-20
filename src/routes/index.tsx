import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PokeProfile from '../pages/PokeProfile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokeprofile" component={PokeProfile} />
  </Switch>
)

export default Routes;
