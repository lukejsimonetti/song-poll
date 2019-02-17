import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'

const Header = props => {
  return (
    <div className="header">
      <h1 style={{ margin: 0, fontWeight: 200 }}>
        Song Poll App
        </h1>
      <ButtonGroup style={{marginRight: 25}}>
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

export default Header;