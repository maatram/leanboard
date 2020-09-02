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
import { getErrorMessage } from "./AppUtils";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [signInState, setSignInState] = useState();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn);
  const onChange = (e) => {
    setSignInState(e);
  }
  useEffect(() => {
    setSignInState(isLoggedIn);
    auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        setCurrentUser(authUser);
      } else {
        setCurrentUser(null);
      }
    })
  }, [])
  return (
    <div className="App">
      <h3>Lean Board</h3>
      {isNullOrUndefined(currentUser) ?
        <div>
          {
            signInState ? <SignIn signInState={signInState} onSignInStateChange={onChange} /> :
              <SignUp signInState={signInState} onSignInStateChange={onChange} />
          }
        </div>
        : null}
      {currentUser ?
        <Container className="container" maxWidth="sm">
          <UserInfo currentUser={currentUser} />
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
