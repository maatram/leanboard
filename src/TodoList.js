import React, { useState, useEffect } from "react";
import { todosRef } from './firebase';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Switch from "@material-ui/core/Switch";
function TodoList() {
    const [todos, setTodos] = useState([]);
    const updateTodo = (props) => {
        console.log(props);
        const { todo } = props;
        //todosRef.child(todo.id).set({ ...todo, done: !todo.done })
    }
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
                    <div>
                        <Switch
                            edge="end" checked={todo.done} onChange={updateTodo}
                            inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
                        />
                        1{todo.done}2  {todo.task} &nbsp; 
                        <IconButton variant="contained" color="secondary" onClick={e=>todosRef.child(todo.id).remove()}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        </div>
                    {i < todos.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </>
    );
}

export default TodoList;