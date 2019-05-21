import React from 'react';
import { storiesOf } from '@storybook/react';
import ListHeader from './index';

storiesOf('ListHeader', module).add('Basic usage', () => (
  <ListHeader name="Team To-do List" date="Tue 12 December" />
));
