import React, { lazy, Suspense, memo, Component } from 'react'
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './views/dashboard/Index'
import Header from './components/Header'
import GlobalProvider from './components/GlobalProvider'

const Polls = lazy(() => import(/* webpackChunkName: "polls" */ './views/poll/Routes'))

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <div className="App">
          <Header />
          <div className="container">
            <Router>
              <Suspense fallback={<div>loading</div>}>
                <Switch>
                  {/* <Route exact path="/login" name="Login Page" component={requireNoAuth(Login)} /> */}
                  {/* <Route exact path="/register" name="Register Page" component={requireNoAuth(Register)} /> */}
                  {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
                  {/* <Route exact path="/500" name="Page 500" component={Page500} /> */}
                  <Route exact path="/" name="Home" component={Dashboard} />
                  <Route path="/poll/" name="Polls" component={Polls} />
                </Switch>
              </Suspense>
            </Router>
          </div>
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
