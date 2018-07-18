import React from 'react';

import './selectButton.scss';

const SelectButton = ({ onInputMouseDown }) => (
  <div
    className="select-button"
    onMouseDown={onInputMouseDown}
  >
    <div className="select-button__triangle" />
  </div>
);

export default SelectButton;
