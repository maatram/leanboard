import React, { useState } from 'react';
import { auth, signInWithGoogle } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import { getErrorMessage } from "./AppUtils";

function SignIn(props) {
    const [error, setError] = useState('');
    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        await auth.signInWithEmailAndPassword(email, password)
            .then()
            .catch(error => { setError(getErrorMessage(error.code)) })
    }
    const onClick = (e) => {
        e.preventDefault();
        props.onSignInStateChange(false);
    }
    return (
        <Container className="container" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField label="Email" variant="outlined" fullWidth name="email" onChange={onChange} value={email} />
                <TextField label="Password" variant="outlined" fullWidth name="password" margin="normal" type="password" onChange={onChange} value={password} />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign In </Button>
                <p>or</p>
                <Button type="button" fullWidth variant="contained" onClick={signInWithGoogle} color="secondary">
                    Login with google
                </Button>
                <p>
                    Dont have an account? <Link className="click-here" onClick={onClick}>SignUp</Link>
                </p>
            </form>
            {error && <p style={{ 'color': 'red', 'fontSize': '20px' }}>{error}</p>}
        </Container>
    )
}

export default SignIn;