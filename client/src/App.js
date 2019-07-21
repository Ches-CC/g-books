import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedPage from "./pages/Saved";
import SearchPage from "./pages/Search";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <SearchPage/>}/>
            <Route exact path="/search" render={() => <SearchPage/>}/>
            <Route exact path="/saved" render={() => <SavedPage/>}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
