import React from 'react';
import { Input } from 'react-materialize';

const TabItem = props => {
  return (
    <Input
      s={12}
      name="group1"
      className="group1"
      type="checkbox"
      value={props.value}
      label={props.value}
      checked={props.check}
    />
  );
};

export default TabItem;
