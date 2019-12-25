import React from 'react';
import {
    Container,
    Grid,
    Paper
} from '@material-ui/core';
import './Health.scss';

export const Health = () => {
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} justify='center' className='health-landing'>
                    <Paper>Hello</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Health;