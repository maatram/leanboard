import React, { useState } from 'react';
import { auth, signInWithGoogle } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';

function SignIn(props) {
    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        await auth.signInWithEmailAndPassword(email, password).then(res => {
            console.log('res', res);
        })
    }
    const onClick = (e) => {
        props.signInState = false;
        e.preventDefault();
    }
    return (
        <Container className="container" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    onChange={onChange}
                    value={email}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    margin="normal"
                    type="password"
                    onChange={onChange}
                    value={password}
                />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign In </Button>
                <p>or</p>
                <Button type="button" fullWidth variant="contained" onClick={signInWithGoogle} color="secondary">
                    Login with google
                </Button>
                <p>
                    If you dont have an account, <Link onClick={onClick}>SignUp here</Link>
                </p>
            </form>
        </Container>
    )
}

export default SignIn;