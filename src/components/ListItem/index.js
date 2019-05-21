import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ReactComponent as TrashIcon } from 'static/icons/trash.svg';

const Container = styled.li`
  padding: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .delete {
    visibility: hidden;
  }

  &:hover {
    background: #f4efff;
    .delete {
      visibility: visible;
    }
  }
`;

const Content = styled.span`
  font-weight: normal;
  margin: 10px 0;
  padding-left: 8px;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey;
    `};
`;

const ListItem = ({ content, isCompleted, onChange }) => (
  <Container>
    <div>
      <input type="checkbox" checked={isCompleted} onChange={onChange} />
      <Content isCompleted={isCompleted}>{content}</Content>
    </div>
    <div className="delete">
      <TrashIcon height={12} width={12} fill="#4609d9" />
    </div>
  </Container>
);

ListItem.propTypes = {
  content: PropTypes.string,
  isCompleted: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ListItem;
