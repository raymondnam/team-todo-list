import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuList from './index';

storiesOf('SideBar', module).add('Basic usage', () => <MenuList name="Team To-do List" />);
