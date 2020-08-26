import React from 'react';
import Link from '@material-ui/core/Link';
import { auth } from "./firebase"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function UserInfo(props) {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="toolBar">
                    <Typography variant="body1" >
                        {props.currentUser ?.email}
                    </Typography>
                    <Button size="small" variant="contained" color="default" className="logout click-here" onClick={(e) => auth.signOut()}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default UserInfo;