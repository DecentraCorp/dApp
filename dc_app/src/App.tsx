// - React Imports
import React from 'react';
import { Route,Switch, HashRouter} from 'react-router-dom'

// - Css Imports
import { backgroundstyle } from 'styles';
import  {Background} from '../src/main'
import logo from './logo.svg';
import './App.css';
 
// - Component Imports
import { Header } from './components/common/header';
import Bank from './components/bank/bank'
import Dao from './components/dao/dao';
import Homepage from './components/homepage/homepage';

//- Web3 Imports
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
class App extends React.Component {
  render() {
    return ( 
    <HashRouter>
        <div style={backgroundstyle}>
          <Header/>
            <Switch>
            
            <Route exact path="/" component={Homepage}>
             
            </Route>
            <Route path="/bank" component={Bank}>
            
            </Route>
            <Route path="/dao" component={Dao}>
             
           
            </Route>
           
          </Switch>
        </div>
      
    </HashRouter>
      
    )
  }
}
     
    
  

export default App;
