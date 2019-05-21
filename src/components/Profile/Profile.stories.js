import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from './index';

storiesOf('Profile', module).add('Basic usage', () => (
  <Profile username="John Doe" avatarUrl="https://i.pravatar.cc/28" />
));
