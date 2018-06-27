import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import Options from './Options';

import './select.scss';

class SelectInput extends React.Component {
  static propTypes = {
    options: arrayOf(shape({
      name: string,
      value: string || number,
    })),
  }

  static defaultProps = {
    options: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      mouseDown: false,
      dropDown: false,
      value: '',
    };
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.mouseUpHandler, false);
  }

  onInputMouseDown = () => {
    this.setState(() => ({
      mouseDown: true,
      dropDown: true,
    }));
  }

  onCloseDropDown = () => {
    this.setState(() => ({
      mouseDown: false,
      dropDown: false,
    }));
  }

  onOptionMouseDown = (e) => {
    this.setState({
      mouseDown: true,
      dropDown: false,
      value: e.target.innerText,
    });
  }

  onChange = (e) => {
    // TODO: use e.persist() instead of spread
    const event = { ...e };
    this.setState(
      () => ({ value: event.currentTarget.value }),
      () => {
        this.filterOptions(event.currentTarget.value);
      },
    );
  }

  filterOptions = (value) => {
    let { options } = this.props;
    options = options.filter((option) => {
      const n = option.name.toLowerCase();
      const v = value.toLowerCase();
      return n.includes(v);
    });

    this.setState({ options });
  }

  mouseUpHandler = () => {
    if (this.state.mouseDown) {
      this.setState({ mouseDown: false });
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
          onChange={this.onChange}
        />
        <div
          className="select__button"
          onMouseDown={this.onInputMouseDown}
          role="button"
          tabIndex="0"
        >
          <div className="select__button--triangle" />
        </div>
        {
          dropDown &&
          <Options
            options={options}
            onOptionMouseDown={this.onOptionMouseDown}
          />
        }
      </div>
    );
  }
}

export default SelectInput;
