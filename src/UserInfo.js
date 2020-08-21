import React from 'react';
import Link from '@material-ui/core/Link';
import { auth } from "./firebase"
function UserInfo(props) {
    return (
        <>
            <h3>Your mail id {props.currentUser ?.email}</h3>
            <Link className="logout" onClick={(e) => auth.signOut()}>Logout</Link>
        </>
    )
}
export default UserInfo;
