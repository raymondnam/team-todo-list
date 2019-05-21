import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Profile from '../Profile';
import MenuList from '../MenuList';

const Container = styled.div`
  width: 240px;
  box-shadow: 4px 1px 5px 0px rgba(0,0,0,0.16);
  height: 100vh;
  padding: 0 10px;
`;

const SideBar = () => (
  <Container>
    <Profile username="John Doe" avatarUrl="https://i.pravatar.cc/28" />
    <MenuList name="Team To-do List" />
  </Container>
);

SideBar.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default SideBar;
