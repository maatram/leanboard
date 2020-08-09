import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
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
            <FormControl fullWidth>
                <TextField
                    id="outlined"
                    label="ADD TODO"
                    style={{ margin: 8 }}
                    placeholder="write something"
                    margin="normal"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" />
            </FormControl>
        </form>
    );
}

export default TodoForm;