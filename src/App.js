import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SearchAppBar from './components/layout/navbar'
import Men from './components/men/Men';
import Women from './components/Women/Women';
import Kids from './components/kids/Kids';
import All from './components/All';
import FontPage from './components/layout/FontPage'
import Description from './components/kids/Description'
class App extends Component {

  render() {
    return (
        <Router>
        <div className="App">
        <SearchAppBar/>
        <Route  exact path ="/" component={FontPage} />
        <Route exact path="/all" component={All}/>
        <Route exact path="/shop/men" component={Men}/>
        <Route exact path="/shop/women" component={Women}/>
        <Route exact path="/shop/kids" component={Kids}/>
        
        <Route exact path="/description">{Description}</Route>
        </div>
        </Router>
        
    );
  }
}

export default App;
