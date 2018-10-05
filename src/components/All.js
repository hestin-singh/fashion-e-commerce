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
    height: 280,
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
  },
  deco:{
    textDecoration: 'none',
    
    fontFamily: 'roboto-regular',
   textAlign:'centre',
    color:'black',
  }
});

class All extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          AllClothes:[]
        }
      };
      componentDidMount(){
        fetch('http://159.65.151.175/api/v1/search?si=df464f1ebfef5d4f5aa4af87dbd7195d&page=0')
            .then(response =>{
              return response.json();
            })
            .then(result => {
                console.log(result.data.values);
                console.log(result.data.values[0]);
              this.setState({
                AllClothes: result.data.values
              })
            })
            .catch(err=>{
              console.log(err);
            });
        }
    
render() {
    const { classes } = this.props;
    const {AllClothes} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {AllClothes.map(value => (
               <Link className={classes.deco}  key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid key={value.id} item>
                <Paper className={classes.paper} >
                
                <img alt={value} className={classes.img} src={value.imageUrls["800x800"]}></img>
                <hr/>
                <div className={classes.position} >{value.category}</div>
                <br/>
                <strong>  Price :{value.sizes[0].sellingPrice}</strong>
                
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



export default withStyles(styles)(All);
