import React from 'react';
import './App.css';
import Heading from './Heading';
import TaskList from'./TaskList';

function App() {
  return (
    <div className="App">
      <Heading text = 'Your Task List'/>
      <TaskList />
    </div>
  );
}

export default App;
