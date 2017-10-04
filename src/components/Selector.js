import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class Selector extends Component {
  // const test = [...new Set(props.db.map(item => item.name))];
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.getData();
    this.handleChange = this.handleChange.bind(this);
  }

  async getData() {
    const data = await this.props.store.getAllData();
    const filterData = [...new Set(data.map(item => item.tabId))];
    this.setState({ data: filterData });
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <Input s={3} type="select" label="Select Tab" defaultValue="1" onChange={this.handleChange}>
        {this.state.data === 0 ? (
          ''
        ) : (
          this.state.data.map((item, index) => (
            <option value={index} key={index}>
              {item}
            </option>
          ))
        )}
      </Input>
    );
  }
}
