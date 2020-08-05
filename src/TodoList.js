import React, { useState, useEffect } from 'react';
import { todosRef } from './firebase';

function TodoList() {
    const [todos, setTodos] = [];
    useEffect(() => {
       todosRef.on('value', (snapshot)=> {
            let items = snapshot.val();
            let newState = [];
            for()
       });
    });
    return (
        
    );
}

export default TodoList;