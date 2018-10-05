import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    width: '100%',
    
  },
  root1:{
    flexGrow: 1,
  },
  position:{
    textAlign: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 115,
    marginRight:5,
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
  title: {
    display: 'none',
    paddingLeft:20,
    paddingRight:20,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  decoration:{
    textDecoration: 'none',
    fontWeight: 200,
    fontFamily: 'roboto-regular',
    textTransform:'uppercase',
    color:'black',
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white,1 ),
    },
    marginLeft: 0,
    marginRight:115,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  list: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

searchSug:{
  
}
});

class SearchAppBar extends React.Component{

    state = {
      anchorEl: null,
      data: null,
      selected:null,
      searched:[]
    }

    handleChange = e => {   
      fetch(`http://159.65.151.175/api/v1/search/suggestion?q=${e.target.value}`)
      .then(response => response.json())
      .then(result => console.log(result.data.suggested) || this.setState({data: result.data.suggested}))
    }
    handleMenuClick = idx => e => {
      console.log(e.target.value);
      console.log(idx)
      this.setState({
        selected: idx
      })
    }
    handleKeyPress = e=>{
      if(e.key ==='Enter'){
        console.log(e)
      fetch(`http://159.65.151.175/api/v1/search?q=${e.target.value}`)
      .then(response=> response.json())
      .then(result=> 
       {  console.log(result.data.values)
          this.setState({
            searched: result.data.values
          })
        })
    }}
    render(){
    const { classes } = this.props;
    const { selected } = this.state;
    const { searched } = this.state;
   
  return (
   
    <div className={classes.root}>
      <AppBar position="static" color="default">
      
        <Toolbar>
        <IconButton className={classes.menuButton} color="default" aria-label="Open drawer">
            <Link className={classes.decoration} to="/">Eshop</Link>
          </IconButton>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
          <Link className={classes.decoration} to="/all">Shop</Link>
          </Typography>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
          <Link className={classes.decoration} to="/shop/men">Men</Link>
          </Typography>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
          <Link  className={classes.decoration} to="/shop/women">Women</Link>
          </Typography>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
          <Link className={classes.decoration} to="/shop/kids">Kids</Link>
          </Typography>
         
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Input
              color="inherit"
              placeholder="Search…"
              onKeyPress={this.handleKeyPress}
              onChange = {this.handleChange}
              value={selected != null && selected >= 0 ? this.state.data[selected] : null}
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            
          </div>
          
        </Toolbar>
      </AppBar>
      {this.state.data && (<ul 
       open={Boolean(this.state.data.length > 0)}>
       {this.state.data.map((suggestion , idx) =>  
        // <Paper className={classes.list} elevation={1} key={idx}>{suggestion}</Paper>)}</ul>
         <MenuItem  classes={classes.searchSug} onClick={this.handleMenuClick(idx)} 
         key={idx} selected={selected === idx}>{suggestion}</MenuItem>)}</ul>
        )}


         <Grid container className={classes.root1} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {searched.map((value , idx) => (
                <Link className={classes.deco}  key={value.id} to={{ pathname: '/description', state: value }} >
              <Grid key={idx} item>
                <Paper className={classes.paper} >
                
                <img key={value} className={classes.img} alt="gfhg" 
                src={value.imageUrls["800x800"]}/>  <hr/>
                <div className={classes.position} >{value.brand}</div>
              

                
                </Paper>
              </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}
}



export default withStyles(styles)(SearchAppBar);