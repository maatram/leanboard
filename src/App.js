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
import { isNullOrUndefined } from 'util';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const signInState = true;
  useEffect(() => {
    auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        setCurrentUser(authUser);
      } else {
        localStorage.removeItem('FIREBASE_TOKEN');
      }
    })
  }, [])
  return (
    <div className="App">
      <UserInfo currentUser={currentUser} />
      {isNullOrUndefined(currentUser) ?
        <div>
          {signInState ? <SignIn signInState={signInState} /> :
          <SignUp />
          }
        </div>
        : null}
      {currentUser ?
        <Container className="container" maxWidth="sm">
          <Card>
            <CardContent>
              <TodoForm currentUser={currentUser} />
              <TodoList currentUser={currentUser} />
            </CardContent>
          </Card>
        </Container>
        : null}
    </div>
  );
}

export default App;
