import React from 'react';
import {Button, Checkbox, Paper, TextField} from '@mui/material';
import todo from '../store/todo';
import {observer} from 'mobx-react-lite';

export const Todo = observer(() => {
    return (
        <Paper elevation={24} style={{width: '350px', margin: '50px auto', padding: '10px'}}>
            <div style={{display: 'flex'}}>
                <TextField variant={'standard'} fullWidth/>
                <Button variant={'contained'}>+</Button>
            </div>
            <Button variant={'contained'} fullWidth color={'secondary'} onClick={() => todo.fetchTodos()}>fetch
                todo</Button>
            <ul style={{marginTop: '20px auto', padding: '5px'}}>
                {todo.todos.map(item =>
                    <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Checkbox checked={item.completed} onClick={() => todo.changeStatusTodo(item.id)}/>
                        <span>{item.title}</span>
                        <Button onClick={() => todo.removeTodo(item.id)}>delete</Button>
                    </div>)}
            </ul>
        </Paper>
    );
})

