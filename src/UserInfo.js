import React from 'react';
const UserInfo = (props) => (
    <>
        <h3>Your mail id {props.currentUser?.email}</h3>
    </>
)
export default UserInfo;
