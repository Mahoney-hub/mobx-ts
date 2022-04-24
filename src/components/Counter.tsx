import React from 'react';
import {Button, ButtonGroup, Paper} from '@mui/material';
import counter from '../store/counter';
import {observer} from 'mobx-react-lite';

export const Counter = observer(() => {
    return (
        <Paper elevation={24} style={{width: '300px', height: '150px', margin: '50px auto', padding: '5px'}}>
            <h1 style={{textAlign: 'center'}}>{counter.count}</h1>
            <ButtonGroup fullWidth variant={'contained'}>
                <Button onClick={()=>counter.increment()}>+</Button>
                <Button onClick={()=>counter.decrement()}>-</Button>
            </ButtonGroup>
        </Paper>
    );
})

