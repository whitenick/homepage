import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography, 
    Menu,
    MenuItem,
    Grid,
    Paper,
    Tabs, 
    Tab,
    Box,
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MoreIcon from '@material-ui/icons/MoreVert';
import '../assets/css/HeaderNav.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerAppBar: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none'
  },
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    backgroundColor: 'transparent !important',
    color: '#52616b'
  },
  title: {
      flexGrow: 1,
      textAlign: 'left', 
      paddingTop: '2rem'
  },
  headerButtons: {
      flexGrow: 1,
      textAlign: 'right'
  },
  nav: {
      flexGrow: 1,
      backgroundColor: '#52616b',
      opacity: 0.9,
      overflow: 'auto'
  },
  tab: {
      color: '#1e2022'
  }
}));

function TabPanel(props) {
    const { children, value, index, url, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Redirect to={'/' + url}/>}
      </Typography>
    );
}

export const HeaderNav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#B0C4DE'
            },
            secondary: {
                main: '#f44336'
            }
        },
        typography: {
            fontFamily: 'Courier New'
        }
    })
    const classes = useStyles(theme);
    const [value, setValue] = React.useState(0);
    const [redirect, setRedirect] = React.useState(false);
    const [newPath, setNewPath] = React.useState(null);

    const handleNavChange = (event, newValue) => {
        // if (newValue !== value) {
        //     setRedirect(true);
        //     setValue(value);
        // }
        setValue(newValue);
    };

    const handleMenuClick = () => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLinkedInClick = () => {
        console.log('Linked In Clicked');
    }

    return (
        <div className={classes.root} background-color='transparent'>
            <AppBar position="static" className={classes.headerAppBar}>
                <Toolbar className={classes.toolbar + ' header-nav'}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <ThemeProvider theme={theme}>
                                <Typography className={classes.title} variant="h2">
                                    Nick White
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.headerButtons}>
                                <IconButton color="inherit">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton color="inherit" onClick={() => handleLinkedInClick()}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton color="inherit" onClick={() => handleMenuClick()}>
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.nav}>
                                <ThemeProvider theme={theme}>
                                    <Tabs
                                        value={value}
                                        onChange={handleNavChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        centered
                                    >
                                        <Tab label="About" className={classes.tab}/>
                                        <Tab label="Projects" className={classes.tab}/>
                                        <Tab label="Analytics" className={classes.tab}/>
                                        <Tab label="Health" className={classes.tab}/>
                                        <Tab label="Posts" className={classes.tab}/>
                                    </Tabs>
                                    </ThemeProvider>
                                <TabPanel value={value} index={0} url='about'/>
                                <TabPanel value={value} index={1} url='projects'/>
                                <TabPanel value={value} index={2} url='options'/>
                                <TabPanel value={value} index={3} url='health'/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderNav;