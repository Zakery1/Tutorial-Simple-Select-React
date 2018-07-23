import React from 'react';

import SelectButton from './SelectButton';

import './select.scss';

class SelectInput extends React.Component {
  render() {
    return (
      <div className="select">
        <input
          type="text"
          placeholder="Topic"
          disabled
        />
        <SelectButton />
      </div>
    );
  }
}

export default SelectInput;
