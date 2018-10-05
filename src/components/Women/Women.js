import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 200,
    
    marginRight:30,
    marginLeft:30,
    marginTop:80,
    // marginDown:20
  },
  deco:{
    textDecoration: 'none',
    fontWeight: 200,
    fontFamily: 'roboto-regular',
   textAlign:'centre',
    color:'black',
  },
  control: {
    padding: theme.spacing.unit * 1,
  },
  img: {
      height:200,
      width:120
  },
  position:{
    textAlign: 'center',
    
  },
  button: {
    margin: theme.spacing.unit,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
    justifyContent: 'center'
  },
});

class Women extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          Women:[]
        }
      };
      componentDidMount(){
        fetch('http://159.65.151.175/api/v1/search?si=62870ecc9047d3fbfd25059b7751d39e&q= &gender=Women&page=1')
        .then(response =>{
          return response.json();
        })
        .then(result =>  {
          console.log(result.data.values);
          console.log(result.data.values[0]);
          this.setState({
            Women: result.data.values
          })
        }
        )
        .catch(err=>{
          console.log(err);
        });      
     
  }
    
render() {
  const { classes } = this.props;
  const {Women} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {Women.map(value => (
              <Link  className={classes.deco} key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid key={value.id} item>
                <Paper className={classes.paper} >
                <img key={value} className={classes.img} alt="gfhg" 
                src={value.imageUrls["800x800"]}/>
                <hr/>
                <div className={classes.position} ><strong> {value.brand}</strong></div>
                <span>{value.title}</span>
                <br/>
                <strong>  Price :{value.sizes[0].sellingPrice}</strong>
                </Paper>
              </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button}>
            Next  
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Women);

