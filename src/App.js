import React, { lazy, Suspense, memo } from 'react'
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Dashboard from './views/dashboard/Index'
import Header from './components/Header'
import GlobalProvider from './components/GlobalProvider'
import Login from './views/auth/Login'
import requireAuth from './views/auth/requireAuth';

const Polls = lazy(() => import(/* webpackChunkName: "polls" */ './views/poll/Routes'))

const App = () => {

    return (
      <GlobalProvider>
        <Router>
          <div className="App">
            <Header  />
            <div className="container">
              <Suspense fallback={<div>loading</div>}>
                <Switch>
                  <Route exact path="/login" name="Login Page" component={requireAuth(Login)} />
                  {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
                  {/* <Route exact path="/500" name="Page 500" component={Page500} /> */}
                  <Route exact path="/" name="Home" component={Dashboard} />
                  <Route path="/poll/" name="Polls" component={Polls} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </Router>
      </GlobalProvider>
    );
}

export default App;
