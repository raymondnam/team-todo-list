import React from 'react';
import { storiesOf } from '@storybook/react';
import AddButton from './index';

storiesOf('AddButton', module).add('Basic usage', () => <AddButton label="Add a to-do" />);
