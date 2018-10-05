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
    height: 320,
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
      height:200,
      width:160
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
  deco:{
    textDecoration: 'none',
    fontWeight: 200,
    fontFamily: 'roboto-regular',
   textAlign:'centre',
    color:'black',
  }
});

class Men extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.
    //   };
      state ={
        Men:[],
        index:100
      }
     
        
      componentDidMount(){

       
        fetch(`http://159.65.151.175/api/v1/search?si=c7ff11802c7ef12c210a3c6c59e9664d&q= &gender=Men&page=${this.state.index}`)
        .then(response =>{
          return response.json();
        })
        .then(result =>  {
          console.log(result.data.values);
          
          this.setState({
            Men: result.data.values,
            
          })
        }
        )
        .catch(err=>{
          console.log(err);
        });  
      }
      handleNextClick = e =>{
       this.setState({
         index: this.state.index +1,
       })
       console.log(this.state.index);
     } 
       
     
  

render() {
  const { classes } = this.props;
  const {Men} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {Men.map(value => (
               <Link className={classes.deco}  key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid key={value.id} item>
                <Paper className={classes.paper} >
                <img key={value} className={classes.img} alt="gfhg" 
                src={value.imageUrls["800x800"]}/>
                <hr/>
                <div className={classes.position} ><strong> {value.brand}</strong></div>
               
                <div><span>{value.title}</span></div>
                <br/>
                <strong> Price :{value.sizes[0].sellingPrice}</strong>
                </Paper>
              </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Button onClick={this.handleNextClick } variant="contained" color="primary" className={classes.button}>
            Next  
        </Button>
      </Grid>
    );
  }
}



export default withStyles(styles)(Men);




