import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import PrivateRoute from './core/helpers/PrivateRoute';
import history from './core/helpers/history';
import Home from './pages/Home';
import AppLoading from './pages/AppLoading';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth/Auth';
import Students from './pages/Students';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import StudentsPlans from './pages/StudentsPlans';
import Specialities from './pages/Specialities';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const { message, variant } = useSelector((state) => state.notificationState);

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: variant });
    }
  }, [enqueueSnackbar, message, variant]);

  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={AppLoading} />
          <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
          <PrivateRoute exact path='/students' component={Students}></PrivateRoute>
          <PrivateRoute exact path='/students-plans' component={StudentsPlans}></PrivateRoute>
          <PrivateRoute exact path='/specialities' component={Specialities}></PrivateRoute>
          <Route exact path='/login' component={Auth}></Route>
          <Route exact path='/register' component={Auth}></Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
