import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
//import SvgIcons from './SvgIcons/SvgIcons'


const styles = {
  root: {
    flexGrow: 10,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: {
      main: '#E91E63',
    },
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={6}>
                <Typography variant="body1" color="inherit">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui pellentesque, accumsan diam a, fringilla libero. Duis quis congue arcu. 
                  Mauris scelerisque leo sed velit egestas finibus. Nam sed pulvinar leo. Pellentesque vitae est erat. Proin et euismod libero. Phasellus et metus ligula. 
                  Nam sed ultrices elit, vel mollis risus.
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={6} sm={6}>
                <Typography variant="body1" color="inherit">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui pellentesque, accumsan diam a, fringilla libero. Duis quis congue arcu. 
                  Mauris scelerisque leo sed velit egestas finibus. Nam sed pulvinar leo. Pellentesque vitae est erat. Proin et euismod libero. Phasellus et metus ligula. 
                  Nam sed ultrices elit, vel mollis risus.
                </Typography>
            </Grid>
          </Grid>

          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);