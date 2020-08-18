import React, { useState } from 'react';
import { auth, signInWithGoogle } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function SignIn() {
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
                <Button type="button" fullWidth variant="contained" onClick={signInWithGoogle} color="secondary">
                    Sign In with google
                </Button>
            </form>
        </Container>
    )
}

export default SignIn;