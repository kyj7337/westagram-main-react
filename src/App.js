import React, {Component} from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper'
import Main from './components/Main'

class App extends Component{
  constructor(){
    super()
    this.state={

    }


  }
  render(){
    return(
      <div>
      <NavWrapper></NavWrapper>
      <Main></Main>
      </div>
    )
  }
}

export default App;
