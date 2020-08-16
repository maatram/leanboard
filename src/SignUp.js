import React, { useState } from 'react';
import { auth, signInWithGoogle } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function SignUp() {
    const [user, setUser] = useState({ username:'', email: '', password: '' });
    const {username, email, password} = user;
    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('user', user);
    }
    return (
        <Container className="container SignUp" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField label="Username" onChange={onChange} name="username" variant="outlined" fullWidth value={username} />
                <TextField label="Email" onChange={onChange} name="email" variant="outlined" fullWidth margin="normal" value={email} />
                <TextField label="Password" onChange={onChange} name="password" variant="outlined" fullWidth margin="normal" type="password" value={password} />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign Up </Button>
            </form>
        </Container>
    )
}

export default SignUp;