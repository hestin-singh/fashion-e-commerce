import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
//import Description from './Description';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 330,
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

class Kids extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      AllKids:[],
      selectedItem:[]
    }
      };
      componentDidMount(){
        fetch('http://159.65.151.175/api/v1/search?si=3cf8c03af464981060c953f6927e136f&q= &gender=Kids&page=0')
        .then(response =>{
          return response.json();
        })
        .then(result =>  {
          console.log(result.data.values[0]);
          this.setState({
            AllKids: result.data.values,
            selectedItem:result.data.value
          })
        }
        )
        .catch(err=>{
          console.log(err);
        });      
     
  }
    
render() {
  const { classes } = this.props;
  const {AllKids} = this.state;
   
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {AllKids.map(value => (
            <Link className={classes.deco}  key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid item> 
              
                <Paper className={classes.paper} >
                <img key={value} className={classes.img} alt="gfhg" 
                src={value.imageUrls["800x800"]}/>
                <hr/>
                <div className={classes.position} ><strong> {value.brand}</strong></div>
                <span>{value.title}</span>
                <br/>
                <strong>Selling Price</strong>:{value.sizes[0].sellingPrice}
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



export default withStyles(styles)(Kids);







// import React , { Component } from 'react';

// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     marginLeft:30
    
//   },
//   child :{
//     // height:300,
//     // weidth:250,
//     maxHeight: 350,
//     maxWidth: 300,
    

//   },
//   img: {
//     maxHeight: 250,
//     maxWidth: 200,

//   }
  
// });


// class Kids extends Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       Kids:[]
//     }
//   };
//   componentDidMount(){
//     fetch('http://159.65.151.175/api/v1/search?si=3cf8c03af464981060c953f6927e136f&q= &gender=Kids&page=0')
//         .then(response =>{
//           return response.json();
//         })
//         .then(result =>  {
//           console.log(result.data.values);
//           console.log(result.data.values[0]);
//           this.setState({
//             Kids: result.data.values
//           })
//         }
//         )
//         .catch(err=>{
//           console.log(err);
//         });   
//   }
  
//   render() {
//     const { classes } = this.props;
//     const {Kids} = this.state;
   
//     return (
//       <Grid container className={classes.root} spacing={24}>
//          {Kids.map(value => (
//           <Grid item xs={12} sm={4} md={4} key={value.key}>                                                                                                                                                                                                                  
//               <Paper className={classes.child}>
//                 <span>{value.brand}</span>
//                 <br/>
//                 <span>{value.title}</span>
//                 <img key={value} className={classes.img} alt="gfhg" 
//                 src={value.imageUrls["800x800"]}/> </Paper>    
//           </Grid>
//           ))}
//       </Grid>
//     );
//   }
// }



// export default withStyles(styles , { withTheme: true})(Kids);
