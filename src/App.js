import React, { Component, Fragment } from 'react';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import Search from './components/search/Search';
import './App.css';

class App extends Component {
 
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <NavBar />
          <Search />
          </div>
          
          <Footer style={{position: 'static'}}/>
        
      </Fragment>  
        
      
    );
  }
}

export default App;
