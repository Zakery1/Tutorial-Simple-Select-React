import React from 'react';

// import NpmSelect from 'simple-react-select';
import Select from 'src/components/Select';

import './app.scss';

const options = [
  { name: 'option1', value: '1' },
  { name: 'option2', value: '2' },
  { name: 'option3', value: '3' },
];

const App = () => (
  <div className="development">
    <div className="development__container">
      <div className="select-container">
        <Select options={options} />
      </div>
    </div>
  </div>
);

export default App;
