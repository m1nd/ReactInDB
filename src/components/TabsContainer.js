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

    this.props.store.getAllData().then(item => this.setState({ data: item }));
  }

  render() {
    return (
      <Col s={12} className="center-align">
        <Tabs s={8}>
          {this.state.data.map(
            (item, index, arr) =>
              index > 0 && arr[index - 1].tabId === item.tabId ? (
                <TabItem value={item.name} check={item.checked} />
              ) : (
                <Tab title={item.tabId} key={index}>
                  <TabItem value={item.name} check={item.checked} />
                </Tab>
              ),
          )}
        </Tabs>
      </Col>
    );
  }
}
