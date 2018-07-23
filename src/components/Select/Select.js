import React from 'react';

import SelectButton from './SelectButton';
import Options from './Options';

import './select.scss';

class SelectInput extends React.Component {
  state = {
    options: this.props.options,
    value: '',
  };

  render() {
    const { value, options } = this.state;
    return (
      <div className="select">
        <input
          type="text"
          placeholder="Topic"
          value={value}
        />
        <SelectButton />
        <Options options={options} />
      </div>
    );
  }
}

export default SelectInput;
