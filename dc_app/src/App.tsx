// - React Imports
import React, { useState } from 'react';
import { Route,Switch, HashRouter} from 'react-router-dom'

// - Css Imports
import { backgroundstyle } from './styles';
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

// - Apollo Imports
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Topbar from './components/homepage/topbar';
import Wallet from './components/userWallet/wallet';

// Web3 Wallet
function getLibrary(provider: any): Web3Provider {
  console.log(
		'line 28',
	);
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
}

// - Apollo Client 
const client = new ApolloClient({
  uri: process.env.REACT_APP_SUBGRAPH_URL_1,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <HashRouter>
               <div style={backgroundstyle}>

          <Header/>

          <Switch>
     {/* <Topbar /> */}
            
          <Route exact path="/" component={Homepage}>
    {/* Put this in a modal */}
          <Wallet />

              
           </Route>
          <Route path="/bank" component={Bank}>
            
          </Route>
         <Route path="/dao" component={Dao}>
             
           
          </Route>
           
           </Switch>
            </div>
      
           </HashRouter>
  );
}
     
function wrappedApp() {
  return (
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
          <App />
      </Web3ReactProvider>
    </ApolloProvider>
  );
}

export default wrappedApp;
