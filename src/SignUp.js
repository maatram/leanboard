import React, { useState } from 'react';
import { auth, signInWithGoogle, createUserProfile } from "./firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function SignUp() {
    const [user, setUser] = useState({ displayName:'', email: '', password: '' });
    const { displayName, email, password} = user;
    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        if(user) {
            console.log(displayName);
            await createUserProfile(user, {displayName});
        }
    }
    return (
        <Container className="container SignUp" maxWidth="xs">
            <form noValidate autoComplete="off" className="Input-Form" onSubmit={onSubmit}>
                <TextField label="Display Name" onChange={onChange} name="displayName" variant="outlined" fullWidth value={displayName} />
                <TextField label="Email" onChange={onChange} name="email" variant="outlined" fullWidth margin="normal" value={email} />
                <TextField label="Password" onChange={onChange} name="password" variant="outlined" fullWidth margin="normal" type="password" value={password} />
                <Button type="submit" fullWidth variant="contained" color="primary"> Sign Up </Button>
            </form>
        </Container>
    )
}

export default SignUp;