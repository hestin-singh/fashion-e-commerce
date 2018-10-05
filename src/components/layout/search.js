import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 200,
    
    marginRight:30,
    marginLeft:30,
    marginTop:80,
    // marginDown:20
  },
  control: {
    padding: theme.spacing.unit * 1,
  },
  img: {
      height:196,
      width:120
  },
  position:{
    textAlign: 'center'
  }
});

class Search extends React.Component {
    
    
render() {
    const { classes } = this.props;
    const {AllClothes} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {AllClothes.map(value => (
               <Link  key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid key={value.id} item>
                <Paper className={classes.paper} >
                
                <img alt={value} className={classes.img} src={value.imageUrls["800x800"]}></img>
                <hr/>
                <div className={classes.position} >{value.category}</div>
                
                </Paper>
              </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}



export default withStyles(styles)(Search);
