import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import {Link} from 'react-router-dom'
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

class FontPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          recommedationM:[],
          recommedationW:[],
          searchList:[]
        }
      };
      componentDidMount(){
        fetch('http://159.65.151.175/api/v1/category/recommended?gender=Men')
            .then(response =>{
              return response.json();
            })
            .then(result => {
              console.log(result.data.recommendedCategories)
              console.log(result.data.recommendedCategories.length)
              this.setState({
                recommedationM: result.data.recommendedCategories
              })
            })
            .catch(err=>{
              console.log(err);
            });
         
    
            fetch('http://159.65.151.175/api/v1/category/recommended?gender=Women')
            .then(response =>{
              return response.json();
            })
            .then(result => {
              console.log(result.data.recommendedCategories)
              console.log(result.data.recommendedCategories.length)
              this.setState({
                recommedationW: result.data.recommendedCategories
              })
            })
            .catch(err=>{
              console.log(err);
        });
        fetch('http://159.65.151.175/api/v1/search?si=df464f1ebfef5d4f5aa4af87dbd7195d&page=0')
            .then(response =>{
              return response.json();
            })
            .then(result => {
                console.log(result.data.values);
                console.log(result.data.values[0]);
              this.setState({
                searchList: result.data.values
              })
            })
            .catch(err=>{
              console.log(err);
            });
        }
      
    
render() {
    const { classes } = this.props;
    const {recommedationM} = this.state;
    const {recommedationW} = this.state;
    const allRecommend =[...recommedationM ,...recommedationW]
    // const {searchList} = this.state;
    

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {allRecommend.map((value , idx) => (
               
              <Grid key={idx} item>
                <Paper className={classes.paper} >
                
                <img key={value} className={classes.img} alt="gfhg" 
                src={value.image}/>  <hr/>
                <div className={classes.position} >{value.name}</div>
                
                </Paper>
              </Grid>

            ))}
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}



export default withStyles(styles)(FontPage);
