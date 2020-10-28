import './App.css';

import { Switch, Route } from 'react-router-dom';

import MultiplicationPage from './pages/multiplication/multiplication.component';
import MultiplicationDrillPage from './pages/multiplication-drill/multiplication-drill.component';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MultiplicationPage} />
    </Switch>
  </div>
);

export default App;
