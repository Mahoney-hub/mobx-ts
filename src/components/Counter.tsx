import React from 'react';
import {Button, ButtonGroup, Paper} from '@mui/material';

export const Counter = () => {
    return (
        <Paper elevation={24} style={{width: '300px', height: '150px', margin: '50px auto', padding: '5px'}}>
            <h1 style={{textAlign: 'center'}}>0</h1>
            <ButtonGroup fullWidth variant={'contained'}>
                <Button>+</Button>
                <Button>-</Button>
            </ButtonGroup>
        </Paper>
    );
};

