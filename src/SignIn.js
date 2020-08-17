import React, { useState } from 'react';
import { auth, signInWithGoogle } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function SignIn() {
    const [user, setUser] = useState({ email: '', password: '' });
    const onSubmit = () => {

    }
    return (
        <Container className="container" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    margin="normal"
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