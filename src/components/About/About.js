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
                <Grid item md={12} className='profile-box'>
                    <Paper className='profile-paper'>
                        <form className={classes.container} noValidate>
                            <div>
                                <TextField
                                required
                                id="filled-required"
                                label="Required"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                variant="filled"
                                />
                                <TextField
                                disabled
                                id="filled-disabled"
                                label="Disabled"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                variant="filled"
                                />
                                <TextField
                                id="filled-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="filled"
                                />
                                <TextField
                                id="filled-read-only-input"
                                label="Read Only"
                                defaultValue="Hello World"
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                />
                                <TextField
                                id="filled-number"
                                label="Number"
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="filled"
                                />
                                <TextField
                                id="filled-search"
                                label="Search field"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="filled"
                                />
                                <TextField
                                id="filled-helperText"
                                label="Helper text"
                                defaultValue="Default Value"
                                className={classes.textField}
                                helperText="Some important text"
                                margin="normal"
                                variant="filled"
                                />
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;

