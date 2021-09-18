// - React Imports
import React, { useState } from 'react';
import { Route,Switch, HashRouter} from 'react-router-dom'

// - Css Imports 
// - Component Imports
import { Header } from './components/common/header';
import Bank from './pages/bank/bank'
import Dao from './components/dao/dao';
import Homepage from './pages/homepage/homepage';

//- Web3 Imports
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

// - Apollo Imports
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Wallet from './components/userWallet/wallet';
import Membership from './pages/membership/Membership';

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
      <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}>
            {/* Put this in a modal */}
            <Wallet />
          </Route>
          <Route path="/bank" component={Bank} />
          <Route path="/dao" component={Dao} />
          <Route path='/membership' component={Membership} />
        </Switch>
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
