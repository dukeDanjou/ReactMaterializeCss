import React from 'react';
import ReactDOM from 'react-dom';
import FixedActionsButton from './FixedActionsButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FixedActionsButton />, div);
});
