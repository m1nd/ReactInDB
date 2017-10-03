import React, { Component } from 'react';
import { Col, Tabs, Tab } from 'react-materialize';

import TabItem from './TabItem';

export default class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tab',
      data: [],
    };
  }

  render() {
    return (
      <Col s={12} className="center-align">
        <Tabs s={8}>
          {Object.keys(this.props.store).map((item, index) => (
            <Tab title={item} key={index}>
              {this.props.store[item].map((el, ind) => (
                <TabItem key={ind} value={el.name} checked={el.checked} />
              ))}
            </Tab>
          ))}
        </Tabs>
      </Col>
    );
  }
}
