import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import '../index.css';
import App from '../App';
import FixedActionsButton from "../components/FixedActionsButton";

  storiesOf('App', module)
    .add('default view', () => (
      <App />
    ))
    storiesOf('FixedActionsButton', module)
      .add('FixedActionsButton view', () => (
        <FixedActionsButton />
      ))
