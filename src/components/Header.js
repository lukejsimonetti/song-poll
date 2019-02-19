import React, {useContext} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { AuthAPIContext } from '../contexts/AuthAPIContext';

const Header = ({ history }) => {
  const { authenticateUser } = useContext(AuthAPIContext)
  
  history.listen((location, action) => {
    authenticateUser()
  })

  return (
    <div className="header">
      <h1 style={{ margin: 0, fontWeight: 200 }}>
        Song Poll App
        </h1>
      <ButtonGroup style={{ marginRight: 25 }}>
        <Button variant="primary"
          onClick={() => window.location.hash = '/poll/list'}>
          Poll List
            </Button>
        <Button variant="success"
          onClick={() => window.location.hash = '/poll/add'}>
          Add New Poll
            </Button>
      </ButtonGroup>
    </div>
  );
};

export default withRouter(Header);