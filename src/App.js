import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Previewimage from './components/Previewimage'
import './App.css';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
      <div className="App">
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/preview' component={Previewimage} />

    </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
