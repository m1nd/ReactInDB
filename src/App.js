import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';

import Selector from './components/Selector';
import TabsContainer from './components/TabsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.parse(this.props.db).then(item => this.setState({ data: item }));
    this.convert = this.convert.bind(this);
  }

  async parse(data) {
    const parsedData = await data.getAllData();
    return parsedData;
  }

  convert(data) {
    const obj = {};
    data.map((item, index, arr) => {
      if (index === 0)
        obj[item.tabId] = [{ name: item.name, checked: item.checked }];
      else if (arr[index - 1].tabId === item.tabId)
        obj[item.tabId].push({ name: item.name, checked: item.checked });
      else obj[item.tabId] = [{ name: item.name, checked: item.checked }];
      return obj;
    });
    return obj;
  }

  render() {
    const data = this.state.data.length > 0 ? this.convert(this.state.data) : 0;
    return (
      <div className="App">
        <Row>
          <Col s={12} className="center-align">
            <Input s={6} label="Events" />
            <Selector store={this.props.db} />
            <Col s={3} className="left-align">
              <Button waves="light" className="create-btn">
                create<Icon left>create</Icon>
              </Button>
            </Col>
          </Col>
          {data !== 0 ? <TabsContainer store={data} /> : ''}
          <Col s={12} className="right-align">
            <hr />
            <Button waves="light" className="delete-btn">
              delete<Icon left>delete</Icon>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
