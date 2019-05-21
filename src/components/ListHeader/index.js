import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 20px;
  color: white;
  background: #4609d9;
  height: 100px;
  border-radius: 4px;
`;

const Name = styled.h3`
  font-size: 32px;
  font-weight: normal;
  margin: 10px 0;
`;

const Date = styled.div`
  font-size: 18px;
`;

const ListHeader = ({ name, date }) => (
  <Container>
    <Name>{name}</Name>
    <Date>{date}</Date>
  </Container>
);

ListHeader.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default ListHeader;
