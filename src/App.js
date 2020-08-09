import React from 'react';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
      <div className="App">
        <Container className="container" maxWidth="sm">
          <Card>
            <CardContent>
              <TodoForm />
              <TodoList />
            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default App;
