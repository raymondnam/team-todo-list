import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'static/icons/plus.svg';

const ButtonContainer = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const RoundButton = styled.div`
  background: #4609d9;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  color: #4609d9;
  font-size: 16px;
  margin-left: 10px;
`;

const AddButton = ({ onClick, label }) => (
  <ButtonContainer type="button" onClick={onClick}>
    <RoundButton>
      <PlusIcon height={12} width={12} fill="white" />
    </RoundButton>
    <Label>{label}</Label>
  </ButtonContainer>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default AddButton;
