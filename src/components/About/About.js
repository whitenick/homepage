import React from 'react';
import { 
    Grid,
    Paper,
    Container,
    TextField
} from '@material-ui/core';
import './About.scss'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}))

export const About = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2} className='about-page'>
                <Grid item md={4} className='profile-box'>
                    <Paper className='profile-paper'>
                        
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;

