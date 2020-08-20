import React from 'react';
function UserInfo(props) {
    return (
        <>
            <h3>Your mail id {props.currentUser ?.email}</h3>
        </>
    )
}
export default UserInfo;
