import React, { useContext, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { AppStateContext } from '../contexts/AppStateContext';

const Header = ({ history }) => {

  const { userName, isAuthenticated } = useContext(AppStateContext)

  const auth = () => {
    if (!isAuthenticated && window.location.hash !== "#/login") {
      history.push('/login')
      return
    }
    return false
  }

  useEffect(() => {
    auth()
  }, [isAuthenticated])

  history.listen(() => {
    // timeout prevents race condition between router and updating the hook lol
    setTimeout(() => {
      auth()
    }, 500)
  })

  return (
    <div className="header">
      <h1 style={{ margin: 0, fontWeight: 200 }}>
        Song Poll App
        </h1>
      {userName &&
        <h4>
          Welcome, {userName}
        </h4>
      }
      <ButtonGroup style={{ marginRight: 25 }}>
        <Button variant="primary"
          onClick={() => history.push('/poll/list')}>
          Poll List
            </Button>
        <Button variant="success"
          onClick={() => history.push('/poll/add')}>
          Add New Poll
            </Button>
      </ButtonGroup>
    </div>
  );
};

export default withRouter(Header);