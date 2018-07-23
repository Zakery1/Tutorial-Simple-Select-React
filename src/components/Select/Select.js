import React from 'react';

import SelectButton from './SelectButton';
import Options from './Options';

import './select.scss';

class SelectInput extends React.Component {

  state = {
    options: this.props.options,
    value: '',
    dropDown: false,
    mouseDown: false,
  };

  onInputMouseDown = () => {
    this.setState(() => ({
      mouseDown: true,
      dropDown: true,
    }), () => window.addEventListener('mouseup', this.mouseUpHandler, false));
  }

  onCloseDropDown = () => {
    this.setState(() => ({
      mouseDown: false,
      dropDown: false,
    }), window.removeEventListener('mouseup', this.mouseUpHandler, false));
  }

  mouseUpHandler = () => {
    if (this.state.mouseDown) {
      this.setState(() => ({ mouseDown: false }));
      return;
    }
    this.onCloseDropDown();
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
