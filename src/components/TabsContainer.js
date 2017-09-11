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
    this.convert = this.convert.bind(this);
    // console.log(this.props.store.data);
    this.store = {};

    // const obj = {};
    // store.map((item, index, arr) => {
    //   if (index === 0) obj[item.tabId] = [{ name: item.name, checked: item.checked }];
    //   else if (arr[index-1].tabId === item.tabId) obj[item.tabId].push({ name: item.name, checked: item.checked });
    //   else obj[item.tabId] = [{ name: item.name, checked: item.checked }];
    // });

  }

  convert(data) {
    const obj = {};
    data.map((item, index, arr) => {
      if (index === 0) obj[item.tabId] = [{ name: item.name, checked: item.checked }];
      else if (arr[index-1].tabId === item.tabId) obj[item.tabId].push({ name: item.name, checked: item.checked });
      else obj[item.tabId] = [{ name: item.name, checked: item.checked }];
    });
    return (
      <Tabs s={8}>
        { Object.keys(obj).map( item => {
            return ( 
              <Tab title={item} > 
                { obj[item].map( el => {
                    return (
                      <TabItem label={el.name} checked={el.checked}/>
                    )
                  }) 
                }
              </Tab>
              )   
          }) 
        }
      </Tabs>
    );
  }

  componentDidUpdate() {
    // console.log(this.state.data); 
    // this.setState({ name: 123 });
  }

  render() {
    return (
      <Col s={12} className="center-align">
      { this.state.data.length === 0 ? '' : 
          this.convert(this.state.data)            

      }
      </Col>
    );
  }
}
