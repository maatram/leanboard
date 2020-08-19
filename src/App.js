import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserInfo from './UserInfo';
import './App.css';
import { auth } from './firebase';

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        setCurrentUser(authUser);
      }
    })
  }, [])
  return (
    <div className="App">
      <UserInfo currentUser={currentUser} />
      <SignUp />
      <SignIn />
      <Container className="container" maxWidth="sm">
        <Card>
          <CardContent>
            <TodoForm />
            <TodoList />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
