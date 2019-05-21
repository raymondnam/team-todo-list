import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './index';

storiesOf('ListItem', module).add('Basic usage', () => (
  <ListItem content="Item 1" />
));
