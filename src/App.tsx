import React from 'react';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import { backgroundstyle } from 'styles';
import  {Background} from '../src/main'
import logo from './logo.svg';
import './App.css';
import { Header } from 'components/common/header';
import { DecentraBank } from '../types/ethers-contracts/DecentraBank';
import Bank from './components/bank/bank'
import Dao from 'components/dao/dao';
import Homepage from 'components/homepage/homepage';
class App extends React.Component {
  render() {
    return ( 
    <Router>
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
      
    </Router>
      
    )
  }
}
     
    
  

export default App;
