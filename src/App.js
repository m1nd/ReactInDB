import React from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';

import TabsContainer from './components/TabsContainer';

const App = props => (
  <div className="App">
    <Row>
      <Col s={12} className="center-align">
        <Input s={6} label="Events" />
        <Input s={3} type="select" label="Select Tab" defaultValue="1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Input>
        <Col s={3} className="left-align">
          <Button waves="light" className="create-btn">
            create<Icon left>create</Icon>
          </Button>
        </Col>
      </Col>
      <TabsContainer store={props.db} />
      <Col s={12} className="right-align">
        <hr />
        <Button waves="light" className="delete-btn">
          delete<Icon left>delete</Icon>
        </Button>
      </Col>
    </Row>
  </div>
);

export default App;
