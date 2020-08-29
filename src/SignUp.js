import React, { useState } from 'react';
import { auth, signInWithGoogle, createUserProfile } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import { isNullOrUndefined } from 'util';
import { getErrorMessage } from "./AppUtils";

function SignUp(props) {
    const [error, setError] = useState('');
    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isNullOrUndefined(email && password)) {
            await auth.createUserWithEmailAndPassword(email, password)
                .then()
                .catch(error => { setError(getErrorMessage(error.code)) })
        } else {
            alert('Please check your email and password');
        }
    }
    const onClick = (e) => {
        e.preventDefault();
        props.onSignInStateChange(true);
    }
    return (
        <Container className="container" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField label="Email" onChange={onChange} name="email" variant="outlined" fullWidth value={email} />
                <TextField label="Password" onChange={onChange} name="password" variant="outlined" fullWidth margin="normal" type="password" value={password} />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign Up </Button>
                <p>or</p>
                <Button type="button" fullWidth variant="contained" onClick={signInWithGoogle} color="secondary">
                    Login with google
                </Button>
                <p>
                    Already have an account? <Link className="click-here" onClick={onClick}>SignIn</Link>
                </p>
            </form>
            {error && <p style={{ 'color': 'red', 'fontSize': '20px' }}>{error}</p>}
        </Container>
    )
}

export default SignUp;