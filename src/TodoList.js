import React, { useState, useEffect } from "react";
import { todosRef } from './firebase';
import Divider from "@material-ui/core/Divider";
function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todosRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    task: items[item].task,
                    done: items[item].done
                });
            }
            setTodos(newState)
        });
    }, [])
    return (
        <>
            {todos.map((todo, i) => (
                <React.Fragment key={todo.id}>
                    <div> {todo.task} </div>
                    {i < todos.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </>
    );
}

export default TodoList;