import React, { useState } from 'react';
import { auth, signInWithGoogle, createUserProfile } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { isNullOrUndefined } from 'util';

function SignUp() {
    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isNullOrUndefined(email && password)) {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
                .then()
                .catch(error => {
                    alert(error.message);
                });
        } else {
            alert('Please check your email and password');
        }

    }
    return (
        <Container className="container SignUp" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField label="Email" onChange={onChange} name="email" variant="outlined" fullWidth margin="normal" value={email} />
                <TextField label="Password" onChange={onChange} name="password" variant="outlined" fullWidth margin="normal" type="password" value={password} />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign Up </Button>
            </form>
        </Container>
    )
}

export default SignUp;