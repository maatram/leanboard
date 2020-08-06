import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
/* global chrome */
function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={() => {
        chrome.tabs.getSelected(tab => {
          chrome.tabs.update(tab.id, { url: 'chrome-search://local-ntp/local-ntp.html', });
        });
      }}>
        Chrome Tab
        </Button>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
