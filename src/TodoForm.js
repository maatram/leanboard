import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { todosRef } from './firebase';

function TodoForm() {
    const [value, setValue] = useState('');
    const createTodo = (e) => {
        e.preventDefault();
        const item = {
            task: value,
            done: false
        }
        todosRef.push(item);
        setValue('');
    }
    return (
        <form onSubmit={createTodo}>
            <TextField
                id="outlined"
                label="ADD TODO"
                style={{ margin: 8 }}
                placeholder="write something"
                margin="normal"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined" />
        </form>
    );
}

export default TodoForm;