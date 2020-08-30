import React, { useState, useEffect } from "react";
import { todosRef } from './firebase';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Switch from "@material-ui/core/Switch";
import CircularProgress from '@material-ui/core/CircularProgress';
import { isNullOrUndefined } from "util";

function TodoList(props) {
    const [todos, setTodos] = useState([]);
    const updateTodo = (todo) => {
        todosRef.child(todo.id).set({ ...todo, done: !todo.done, author: props.currentUser ?.email})
    }
    useEffect(() => {
        todosRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                if (items[item].author === props.currentUser ?.email) {
                    newState.push({
                        id: item,
                        task: items[item].task,
                        done: items[item].done
                    });
                }
            }
            setTodos(newState)
        });
    }, [props])
    return (
        <>
            {
                (todos.length) ?
                    todos.map((todo, i) => (
                        <React.Fragment key={todo.id}>
                            <div className="Todo">
                                <div className="checkbox-content">
                                    <Switch size="small" checked={todo.done} onChange={() => { updateTodo(todo) }} />
                                    {todo.task}
                                </div>
                                <IconButton variant="contained" color="secondary" onClick={e => todosRef.child(todo.id).remove()}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </div>
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    )) :
                    <CircularProgress />
            }
        </>
    );
}

export default TodoList;