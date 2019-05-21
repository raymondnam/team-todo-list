import React from 'react';
import styled from 'styled-components';
import SideBar from 'components/SideBar';
import ListHeader from 'components/ListHeader';
import TodoList from 'containers/TodoList';

const AppContainer = styled.div`
  background: #f3f3f3;
  display: flex;
`;

const ListContainer = styled.div`
  width: 440px;
`;

function App() {
  return (
    <AppContainer>
      <SideBar />
      <ListContainer>
        <ListHeader name="Team To-do List" date="Tue 12 December" />
        <TodoList />
      </ListContainer>
    </AppContainer>
  );
}

export default App;
