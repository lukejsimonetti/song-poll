import React, { lazy, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import Dashboard from './views/dashboard/Index'
import Header from './components/Header'
import GlobalProvider from './components/GlobalProvider'

import AuthModals from './views/auth/AuthModals'

const Polls = lazy(() => import(/* webpackChunkName: "polls" */ './views/poll/Routes'))

const App = () => {

  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Suspense fallback={<div>loading</div>}>
                <Route exact path="/login" name="Login Page" component={AuthModals} />
                <Route exact path="/" name="Home" component={Dashboard} />
                <Route path="/poll/" name="Polls" component={Polls} />
            </Suspense>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;