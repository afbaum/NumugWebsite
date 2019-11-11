import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
// redux
import { Provider } from 'react-redux';
import store from './store';

import MainPage from './components/pages/MainPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={ MainPage } />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
