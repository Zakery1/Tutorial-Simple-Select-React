import React from 'react';

import SelectButton from './SelectButton';
import Options from './Options';

import './select.scss';

class SelectInput extends React.Component {

  state = {
    options: this.props.options,
    value: '',
    dropDown: false,
  };

  onInputMouseDown = () => {
    this.setState(() => ({
      dropDown: true,
    }));
  }

  onCloseDropDown = () => {
    this.setState(() => ({
      dropDown: false,
    }));
  }

  render() {
    const { value, dropDown, options } = this.state;
    return (
      <div className="select">
        <input
          type="text"
          placeholder="Topic"
          value={value}
          onMouseDown={this.onInputMouseDown}
        />
        <SelectButton
          onInputMouseDown={this.onInputMouseDown}
        />
        {
          dropDown &&
          <Options
            options={options}
          />
        }
      </div>
    );
  }
}

export default SelectInput;
