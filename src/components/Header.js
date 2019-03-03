import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Header = ({ history }) => {
  return (
    <div className="header">
      <h1 style={{ margin: 0, fontWeight: 200 }}>
        Song Poll App
        </h1>
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