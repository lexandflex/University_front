import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import PrivateRoute from './core/helpers/PrivateRoute';
import history from './core/helpers/history';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={LoadingScreen} />
          <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
          <Route exact path='/login' component={Auth}></Route>
          <Route exact path='/register' component={Auth}></Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
